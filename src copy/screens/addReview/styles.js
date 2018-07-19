import { scale } from "../../helper/scale";
import Colors from "../../helper/color";

const styles = {
  ReviewSectionStyle: {
    // backgroundColor: 'silver',
    borderWidth: scale(1),
    borderColor: Colors.grey,
    borderRadius: scale(3),
    alignSelf: "center",
    width: "90%",
    height: scale(132)
  },
  TextInputStyle: {
    fontSize: scale(14.62),
    color: Colors.grey,
    marginHorizontal: scale(8),
    textAlign: "justify",
    lineHeight: scale(22.5)
  },
  addReviewIconStyle: {
    marginHorizontal: "5%",
    marginVertical: "2%"
  },
  WriteReviewStyle: {
    fontSize: scale(15.75),
    color: Colors.subtitle,
    marginLeft: "5%",
    marginTop: "4%",
    marginBottom: "2%"
  },

  SubmitSectionStyle: {
    backgroundColor: Colors.ButtonColor,
    width: "100%",
    height: scale(50),
    marginTop: scale(305)
  }
};
export default styles;
