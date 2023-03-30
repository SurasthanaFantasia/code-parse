package com.coolweather.android;

import android.content.SharedPreferences;
import android.preference.Preference;
import android.preference.PreferenceManager;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.widget.LinearLayout;
import android.widget.ScrollView;
import android.widget.TextView;
import android.widget.Toast;

import com.coolweather.android.gson.Forecast;
import com.coolweather.android.gson.Weather;
import com.coolweather.android.util.HttpUtil;
import com.coolweather.android.util.Utility;

import java.io.IOException;

import okhttp3.Call;
import okhttp3.Callback;
import okhttp3.Response;

public class WeatherActivity extends AppCompatActivity {
  private ScrollView weatherLayout;
  private TextView titleCity, titleUpdateTime, degreeText, weatherIndoText, aqiText, pm25Text, comfortText, carWashText,
      sportText;
  private LinearLayout forecastLayout;

  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    setContentView(R.layout.activity_weather);
    initView();
    SharedPreferences prefs = PreferenceManager.getDefaultSharedPreferences(this);
    String weatherString = prefs.getString("weather", null);
    if (weatherString != null) {
      // 有缓存的时候直接解析天气数据
      Weather weather = Utility.handleWeatherResponse(weatherString);
      showWeatherInfo(weather);
    } else {
      String weatherId = getIntent().getStringExtra("weather_id");
      requestWeather(weatherId);
    }
  }

  public void initView() {
    weatherLayout = findViewById(R.id.weather_layout);
    titleCity = findViewById(R.id.title_city);
    titleUpdateTime = findViewById(R.id.title_update_time);
    degreeText = findViewById(R.id.degree_text);
    weatherIndoText = findViewById(R.id.weather_info_text);
    forecastLayout = findViewById(R.id.forecast_layout);
    aqiText = findViewById(R.id.aqi_text);
    pm25Text = findViewById(R.id.pm25_text);
    comfortText = findViewById(R.id.comfort_text);
    carWashText = findViewById(R.id.car_wash_text);
    sportText = findViewById(R.id.sport_text);
  }

  private void showWeatherInfo(Weather weather) {
    String cityName = weather.basic.cityName;
    String updateTime = weather.basic.update.updateTime.split(" ")[1];
    String degree = weather.now.temperature + "℃";
    String weatherInfo = weather.now.more.info;
    titleCity.setText(cityName);
    titleUpdateTime.setText(updateTime);
    degreeText.setText(degree);
    weatherIndoText.setText(weatherInfo);
    forecastLayout.removeAllViews();
    for (Forecast forecast : weather.forecastList) {
      View view = LayoutInflater.from(this).inflate(R.layout.forecast_item, forecastLayout, false);
      TextView dateText = view.findViewById(R.id.date_text);
      TextView infoText = view.findViewById(R.id.info_text);
      TextView maxText = view.findViewById(R.id.max_text);
      TextView minText = view.findViewById(R.id.min_text);
      dateText.setText(forecast.date);
      infoText.setText(forecast.more.info);
      maxText.setText(forecast.temperature.max);
      minText.setText(forecast.temperature.min);
      forecastLayout.addView(view);
    }
    // "aqi":{"city":{"aqi":"26","pm25":"11","qlty":"优"}}

    if (weather.aqi != null) {
      aqiText.setText(weather.aqi.aqiCity.aqi);
      pm25Text.setText(weather.aqi.aqiCity.pm25);
    }
    String comfort = "舒适度：" + weather.suggestion.comfort.info;
    String carWash = "洗车指数：" + weather.suggestion.carWash.info;
    String sport = "运动建议：" + weather.suggestion.sport.info;
    carWashText.setText(carWash);
    comfortText.setText(comfort);
    sportText.setText(sport);
    weatherLayout.setVisibility(View.VISIBLE);
  }

  public void requestWeather(final String weatherId) {

    String weatherUrl = "http://guolin.tech/api/weather?cityid=" + weatherId + "&key=1b73219207e24a50acd83bf65db4d55a";
    HttpUtil.sendOkHttpRequest(weatherUrl, new Callback() {
      @Override
      public void onFailure(Call call, IOException e) {
        runOnUiThread(new Runnable() {
          @Override
          public void run() {
            // Toast.makeText(WeatherActivity.this,"获取天气信息失败！",Toast.LENGTH_SHORT).show();
          }
        });
      }

      @Override
      public void onResponse(Call call, Response response) throws IOException {
        final String responseText = response.body().string();
        final Weather weather = Utility.handleWeatherResponse(responseText);
        runOnUiThread(new Runnable() {
          @Override
          public void run() {
            if (weather != null && "ok".equals(weather.status)) {
              SharedPreferences.Editor editor = PreferenceManager.getDefaultSharedPreferences(WeatherActivity.this)
                  .edit();
              editor.putString("weather", responseText);
              editor.apply();
              showWeatherInfo(weather);
            } else {
              Toast.makeText(WeatherActivity.this, "获取天气信息失败！", Toast.LENGTH_SHORT).show();
            }
          }
        });
      }
    });
  }
}
