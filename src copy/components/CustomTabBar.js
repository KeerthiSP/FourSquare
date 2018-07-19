// import { Colors } from "../../assets";

import React from 'react';
import {
  View,
  Animated,
  StyleSheet,
  ScrollView,
  Text,
  Platform,
  Dimensions,
  TouchableOpacity,
  I18nManager,
  ViewPropTypes,
} from 'react-native';
import PropTypes from 'prop-types';
import createReactClass from 'create-react-class';
import { scale } from '../helper/scale';
import Colors from '../helper/color';

const WINDOW_WIDTH = Dimensions.get('window').width;

const CustomTabBar = createReactClass({
  propTypes: {
    goToPage: PropTypes.func,
    activeTab: PropTypes.number,
    tabs: PropTypes.array,
    backgroundColor: PropTypes.string,
    activeTextColor: PropTypes.string,
    inactiveTextColor: PropTypes.string,
    scrollOffset: PropTypes.number,
    style: ViewPropTypes.style,
    tabStyle: ViewPropTypes.style,
    tabsContainerStyle: ViewPropTypes.style,
    textStyle: Text.propTypes.style,
    renderTab: PropTypes.func,
    underlineStyle: ViewPropTypes.style,
    onScroll: PropTypes.func,
  },

  getDefaultProps() {
    return {
      scrollOffset: 52,
      activeTextColor: '#fff',
      inactiveTextColor: '#87797F',
      backgroundColor: Colors.primaryColor,
      style: {},
      tabStyle: {},
      tabsContainerStyle: {},
      underlineStyle: {},
    };
  },

  getInitialState() {
    this._tabsMeasurements = [];
    return {
      _leftTabUnderline: new Animated.Value(0),
      _widthTabUnderline: new Animated.Value(0),
      _containerWidth: null,
    };
  },

  componentDidMount() {
    this.props.scrollValue.addListener(this.updateView);
  },

  updateView(offset) {
    const position = Math.floor(offset.value);
    const pageOffset = offset.value % 1;
    const tabCount = this.props.tabs.length;
    const lastTabPosition = tabCount - 1;

    if (tabCount === 0 || offset.value < 0 || offset.value > lastTabPosition) {
      return;
    }

    if (this.necessarilyMeasurementsCompleted(position, position === lastTabPosition)) {
      this.updateTabPanel(position, pageOffset);
      this.updateTabUnderline(position, pageOffset, tabCount);
    }
  },

  necessarilyMeasurementsCompleted(position, isLastTab) {
    return (
      this._tabsMeasurements[position] &&
      (isLastTab || this._tabsMeasurements[position + 1]) &&
      this._tabContainerMeasurements &&
      this._containerMeasurements
    );
  },

  updateTabPanel(position, pageOffset) {
    const containerWidth = this._containerMeasurements.width;
    position =
      Platform.OS === 'ios' && I18nManager.isRTL ? this.props.tabs.length - 1 - position : position; // fix done for RTL scroll focus skd
    const tabWidth =
      (this._tabsMeasurements[position] && this._tabsMeasurements[position].width) || 0;
    const nextTabMeasurements = this._tabsMeasurements[position + 1];
    const nextTabWidth = (nextTabMeasurements && nextTabMeasurements.width) || 0;
    const tabOffset =
      (this._tabsMeasurements[position] && this._tabsMeasurements[position].left) || 0;
    const absolutePageOffset = pageOffset * tabWidth;
    let newScrollX = tabOffset + absolutePageOffset;

    // android scroll to center on selected
    if (Platform.OS === 'android') {
      const scrollBase = tabOffset + tabWidth / 2 - containerWidth / 2;
      const scrollOffset = (tabWidth + nextTabWidth) * 0.5 + pageOffset;
      const scrollXForAndroid = I18nManager.isRTL
        ? scrollBase - scrollOffset
        : scrollBase + scrollOffset;

      this._scrollView.scrollTo({
        x: scrollXForAndroid,
        y: 0,
        animated: false,
      });
    } else {
      // IOS center tab and smooth tab change (for when tabWidth changes a lot between two tabs)
      newScrollX -= (containerWidth - (1 - pageOffset) * tabWidth - pageOffset * nextTabWidth) / 2;
      newScrollX = newScrollX >= 0 ? newScrollX : 0;

      const rightBoundScroll =
        this._tabContainerMeasurements.width - this._containerMeasurements.width;
      newScrollX = newScrollX > rightBoundScroll ? rightBoundScroll : newScrollX;
      this._scrollView.scrollTo({ x: newScrollX, y: 0, animated: false });
    }
  },

  updateTabUnderline(position, pageOffset, tabCount) {
    const lineLeft = this._tabsMeasurements[position].left;
    const lineRight = this._tabsMeasurements[position].right;

    if (position < tabCount - 1) {
      const nextTabLeft = this._tabsMeasurements[position + 1].left;
      const nextTabRight = this._tabsMeasurements[position + 1].right;

      const newLineLeft = pageOffset * nextTabLeft + (1 - pageOffset) * lineLeft;
      const newLineRight = pageOffset * nextTabRight + (1 - pageOffset) * lineRight;

      this.state._leftTabUnderline.setValue(newLineLeft);
      this.state._widthTabUnderline.setValue(newLineRight - newLineLeft - scale(20));
    } else {
      this.state._leftTabUnderline.setValue(lineLeft);
      this.state._widthTabUnderline.setValue(lineRight - lineLeft - scale(20));
    }
  },

  renderTab(name, page, isTabActive, onPressHandler, onLayoutHandler) {
    const { activeTextColor, inactiveTextColor, textStyle } = this.props;
    const textColor = isTabActive ? activeTextColor : inactiveTextColor;
    const fontWeight = isTabActive ? 'bold' : 'normal';
    return (
      <TouchableOpacity
        key={page}
        accessible
        accessibilityLabel={name}
        accessibilityTraits="button"
        onPress={() => onPressHandler(page)}
        onLayout={onLayoutHandler}
      >
        <View style={[styles.tab, this.props.tabStyle, { borderColor: textColor }]}>
          <Text
            style={[
              {
                color: textColor,
                fontWeight,
                fontSize: scale(14),
              },
              textStyle,
            ]}
          >
            {name}
          </Text>
        </View>
      </TouchableOpacity>
    );
  },

  measureTab(page, event) {
    const { x, width, height } = event.nativeEvent.layout;
    this._tabsMeasurements[page] = {
      left: x,
      right: x + width,
      width,
      height,
    };
    this.updateView({ value: this.props.scrollValue._value });
  },

  render() {
    const tabUnderlineStyle = {
      position: 'absolute',
      height: scale(4),
      bottom: 0,
    };

    const key = I18nManager.isRTL ? 'right' : 'left';
    const dynamicTabUnderline = {
      [`${key}`]: this.state._leftTabUnderline,
      width: this.state._widthTabUnderline,
    };

    return (
      <View
        style={[
          styles.container,
          { backgroundColor: this.props.backgroundColor },
          this.props.style,
        ]}
        onLayout={this.onContainerLayout}
      >
        <ScrollView
          ref={(scrollView) => {
            this._scrollView = scrollView;
          }}
          automaticallyAdjustContentInsets={false}
          horizontal
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          directionalLockEnabled
          bounces
          scrollsToTop={false}
        >
          <View
            style={[
              styles.tabs,
              {
                width: this.state._containerWidth,
              },
              this.props.tabsContainerStyle,
            ]}
            ref="tabContainer"
            onLayout={this.onTabContainerLayout}
          >
            {this.props.tabs.map((name, page) => {
              const isTabActive = this.props.activeTab === page;
              const renderTab = this.props.renderTab || this.renderTab;
              return renderTab(
                name,
                page,
                isTabActive,
                this.props.goToPage,
                this.measureTab.bind(this, page),
              );
            })}

            <Animated.View
              style={[
                tabUnderlineStyle,
                dynamicTabUnderline,
                this.props.underlineStyle,
                {
                  marginLeft: scale(10),
                  marginRight: scale(10),
                },
              ]}
            />
          </View>
        </ScrollView>
      </View>
    );
  },

  UNSAFE_componentWillReceiveProps(nextProps) {
    // If the tabs change, force the width of the tabs container to be recalculated
    if (
      JSON.stringify(this.props.tabs) !== JSON.stringify(nextProps.tabs) &&
      this.state._containerWidth
    ) {
      this.setState({ _containerWidth: null });
    }
  },

  onTabContainerLayout(e) {
    this._tabContainerMeasurements = e.nativeEvent.layout;
    let width = this._tabContainerMeasurements.width;
    if (width < WINDOW_WIDTH) {
      width = WINDOW_WIDTH;
    }
    this.setState({ _containerWidth: width });
    this.updateView({ value: this.props.scrollValue._value });
  },

  onContainerLayout(e) {
    this._containerMeasurements = e.nativeEvent.layout;
    this.updateView({ value: this.props.scrollValue._value });
  },
});

const styles = StyleSheet.create({
  tab: {
    height: scale(40),
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: scale(24),
    paddingRight: scale(10),
  },
  container: {
    height: 50,
    // borderWidth: 1,
    // borderTopWidth: null,
    // borderLeftWidth: 0,
    // borderRightWidth: 0,
    // borderColor: '#471A30',
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default CustomTabBar;
