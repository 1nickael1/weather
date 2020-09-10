import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  TouchableOpacity,
  Image,
} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import kelvinToCelsius from './utils/kelvinToCelsius';

import {
  Container,
  ViewLoading,
  ViewInfo,
  ViewCity,
  TextCity,
  ViewWeatherState,
  TextWeatherState,
  ViewCelsiusMain,
  TextCelsiusMain,
  ViewCelsiusMax,
  TextCelsiusMax,
  ViewCelsiusMin,
  TextCelsiusMin,
  ViewButton,
  TextButton,
  CenterImage,
  AlignCelsius,
} from './styles';

const weather = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [getApi, setGetApi] = useState(false);

  useEffect(() => {
    setLoading(true);
    Geolocation.getCurrentPosition((info) => {
      const {latitude, longitude} = info.coords;
      fetch(
        `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&lang=pt_br&appid=7a4ab05c38d3824e599635ed5776c89e`,
      )
        .then((response) => response.json())
        .then((data) => {
          setData([
            {
              weather: data.weather,
              name: data.name,
              main: data.main,
            },
          ]);
        })
        .then(() => setLoading(false))
        .catch((err) => console.log(err));
    });
  }, [getApi]);

  if (loading) {
    return (
      <ViewLoading>
        <ActivityIndicator color="#FFF" size={30} />
        <Text style={{fontSize: 20, color: '#fff'}}>
          Por favor aguarde um momento
        </Text>
      </ViewLoading>
    );
  }

  return (
    <>
      <Container>
        <ViewInfo>
          {data.map((e) => (
            <View key={e.name}>
              <ViewWeatherState>
                <TextWeatherState>{e.weather[0].description}</TextWeatherState>
              </ViewWeatherState>
              <CenterImage>
                <Image
                  style={{width: 100, height: 100}}
                  source={{
                    uri: `http://openweathermap.org/img/wn/${e.weather[0].icon}@2x.png`,
                  }}
                />
              </CenterImage>

              <ViewCity>
                <TextCity>{e.name}</TextCity>
              </ViewCity>
              <ViewCelsiusMain>
                <TextCelsiusMain>
                  {kelvinToCelsius(e.main.temp)}
                </TextCelsiusMain>
              </ViewCelsiusMain>
              <AlignCelsius>
                <ViewCelsiusMin>
                  <TextCelsiusMin>
                    Min: {kelvinToCelsius(e.main.temp_min)}
                  </TextCelsiusMin>
                </ViewCelsiusMin>
                <ViewCelsiusMax>
                  <TextCelsiusMax>
                    Max: {kelvinToCelsius(e.main.temp_max)}
                  </TextCelsiusMax>
                </ViewCelsiusMax>
              </AlignCelsius>
              <TouchableOpacity
                style={{alignItems: 'center'}}
                onPress={() => setGetApi(!getApi)}>
                <ViewButton>
                  <TextButton>Atualizar dados</TextButton>
                </ViewButton>
              </TouchableOpacity>
            </View>
          ))}
        </ViewInfo>
      </Container>
    </>
  );
};

export default weather;
