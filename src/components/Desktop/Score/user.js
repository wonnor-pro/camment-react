import {withStyles} from "@material-ui/core/styles";
import Rating from "@material-ui/lab/Rating";

const UserStyledRating = withStyles({
  iconFilled: {
    color: '#3B434D',
  },
  iconHover: {
    color: '#FA9600',
  },
})(Rating);

export default UserStyledRating;