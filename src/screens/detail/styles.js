import { scale } from "../../helper/scale";
import Colors from "../../helper/color";

const styles = {
  ImageSectionStyle: {
    backgroundColor: Colors.grey1,
    width: "100%",
    height: scale(297)
  },

  IconLabelStyle: {
    marginTop: scale(3),
    fontSize: scale(13.5),
    color: Colors.grey,
    fontWeight: "bold"
  },
  RatingIconAlignment: {
    flexDirection: "column",
    flex: 3,
    alignItems: "flex-end"
  },
  PhotosIconAlignment: {
    flex: 4,
    alignItems: "center",
    flexDirection: "column"
  },
  ReviewIconAlignment: {
    flex: 3,
    flexDirection: "column"
  },
  Breakline: {
    backgroundColor: Colors.grey1,
    width: "90%",
    height: scale(1),
    alignSelf: "center"
  },
  IconsoverallView: {
    flexDirection: "row",

    marginVertical: "3%"
  },
  OverviewTitle: {
    fontSize: scale(18),
    fontWeight: "bold",
    color: Colors.overview
  },
  Overview: {
    marginTop: scale(15),
    fontSize: scale(16),
    color: Colors.grey,
    lineHeight: scale(19),
    fontWeight: "bold",
    textAlign: "justify"
  },
  MapSectionStyle: {
    backgroundColor: Colors.grey1,
    width: "100%",
    height: scale(136)
  }
};
export default styles;
