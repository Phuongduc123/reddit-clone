import {StyleSheet} from 'react-native';
import COLORS from '../../consts/styles/color';
import {s} from '../../consts/styles/scalingUtils';

export const styles = StyleSheet.create({
  viewTop: {
    backgroundColor: COLORS.white,
    flex: 0.15,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 99,
  },
  viewBottom: {
    backgroundColor: COLORS.DarkGray,
    flex: 0.85,
  },
  avatar: {
    width: s(90),
    height: s(90),
    position: 'relative',
    top: '50%',
  },
  tab: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: s(20),
    paddingLeft: '36%',
  },
  tabText: {
    color: COLORS.White,
    fontSize: s(20),
    marginLeft: s(10),
  },
  infoGroup: {
    marginTop: s(50),
    marginBottom: s(30),
    alignItems: 'center',
  },
  nameText: {
    color: COLORS.White,
    fontSize: s(30),
  },
  infoText: {
    color: COLORS.White,
    fontSize: s(14),
  },
});
