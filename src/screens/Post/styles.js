import {StyleSheet} from 'react-native';
import COLORS from '../../consts/styles/color';
import {s} from '../../consts/styles/scalingUtils';

export const styles = StyleSheet.create({
  titleView: {
    backgroundColor: COLORS.DarkGray,
    padding: s(15),
    borderRadius: s(20),
    marginVertical: s(20),
  },
  titleText: {color: COLORS.Black, fontSize: s(24), fontWeight: 'bold'},
  mainView: {
    backgroundColor: COLORS.DarkGray,
    paddingHorizontal: s(10),
    borderRadius: s(20),
  },
  descriptionView: {
    backgroundColor: COLORS.white,
    padding: s(15),
    borderRadius: s(20),
    marginTop: s(10),
  },
  actionView: {
    flexDirection: 'row',
    backgroundColor: COLORS.white,
    borderRadius: s(20),
    marginTop: s(20),
    padding: s(10),
    marginBottom: s(10),
  },
  commentActionView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderLeftWidth: 1,
    borderLeftColor: COLORS.DarkGray,
  },
  commentView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopLeftRadius: s(20),
    borderTopRightRadius: s(20),
    overflow: 'hidden',
    height: s(50),
    backgroundColor: COLORS.DarkGray,
    paddingRight: s(10),
    marginTop: s(20),
  },
  commentAvatarImg: {
    width: s(30),
    height: s(30),
    borderRadius: s(15),
    marginHorizontal: s(10),
  },
  commentInput: {
    backgroundColor: COLORS.white,
    width: '80%',
    height: '80%',
    borderRadius: s(20),
    paddingHorizontal: s(10),
  },
});
