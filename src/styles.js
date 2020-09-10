import styled from 'styled-components/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const Container = styled.View`
  flex: 1;
  background-color: #a1d9e0;
  justify-content: center;
`;

export const ViewLoading = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #a1d9e0;
`;

export const ViewInfo = styled.View`
  /* background-color: #fff; */
  width: ${wp('100%')}px;
  align-items: center;
  justify-content: center;
`;

export const ViewCity = styled.View`
  margin-bottom: ${hp('5%')}px;
`;

export const TextCity = styled.Text`
  font-size: ${wp('10%')}px;
  color: #fff;
`;

export const CenterImage = styled.View`
  align-items: center;
  margin-bottom: ${hp('5%')}px;
`;

export const ViewWeatherState = styled.View`
  align-items: center;
  margin-bottom: ${hp('5%')}px;
`;

export const TextWeatherState = styled.Text`
  font-size: ${wp('10%')}px;
  color: #fff;
`;

export const AlignCelsius = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: ${wp('80%')}px;
  margin-top: ${hp('5%')}px;
  margin-bottom: ${hp('5%')}px;
`;

export const ViewCelsiusMain = styled.View`
  width: ${wp('40%')}px;
`;

export const TextCelsiusMain = styled.Text`
  font-size: ${wp('15%')}px;
  color: #fff;
`;

export const ViewCelsiusMax = styled.View`
  width: ${wp('15%')}px;
  background-color: #fff;
  margin: ${wp('1%')}px;
`;

export const TextCelsiusMax = styled.Text`
  font-size: ${wp('5%')}px;
  text-align: center;
  color: #b1b6c4;
`;

export const ViewCelsiusMin = styled.View`
  width: ${wp('15%')}px;
  background-color: #fff;
  margin: ${wp('1%')}px;
`;

export const TextCelsiusMin = styled.Text`
  font-size: ${wp('5%')}px;
  text-align: center;
  color: #b1b6c4;
`;

export const ViewButton = styled.View`
  width: ${wp('35%')}px;
  height: ${hp('5%')}px;
  background-color: #fff;
  border-radius: ${wp('10%')}px;
  justify-content: center;
  align-items: center;
`;

export const TextButton = styled.Text`
  font-size: ${wp('5%')}px;
  color: #000;
`;
