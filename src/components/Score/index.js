import {withStyles} from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';

const StyledRating = withStyles({
  iconFilled: {
    color: '#FA9600',
  },
  iconHover: {
    color: '#FA9600',
  },
})(Rating);

export default StyledRating;