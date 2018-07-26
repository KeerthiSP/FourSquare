import { scale } from "../helper/scale";
import Colors from "../helper/color";

const Styles = {
  home: {
    MapSectionStyle: {
      backgroundColor: Colors.white,
      width: "100%",
      height: scale(180),
      marginBottom: scale(6)
    }
  },
  ButtonTitleStyle: {
    color: Colors.white,
    fontSize: scale(20),
    fontWeight: "bold",
    fontStyle: "normal",
    justifyContent: "center",
    textShadowRadius: scale(2),
    textShadowColor: Colors.grey,
    alignItems: "center",
    alignSelf: "center",
    marginTop: scale(13)
  },
  addReview: {},
  FlexDirectionColumn: {
    flexDirection: "column"
  },
  FlexDirectionRow: {
    flexDirection: "row"
  },
  SearchBarstyle: {
    flexDirection: "row",
    backgroundColor: Colors.white,
    borderRadius: scale(5),
    width: scale(250),
    height: scale(36)
  }
};
export default Styles;
