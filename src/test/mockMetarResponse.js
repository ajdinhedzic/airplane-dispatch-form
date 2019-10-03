const ksea = `<?xml version="1.0" encoding="UTF-8"?>
<response xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XML-Schema-instance" version="1.2" xsi:noNamespaceSchemaLocation="http://aviationweather.gov/adds/schema/metar1_2.xsd">
    <request_index>30972911</request_index>
    <data_source name="metars" />
    <request type="retrieve" />
    <errors />
    <warnings />
    <time_taken_ms>5</time_taken_ms>
    <data num_results="1">
        <METAR>
            <raw_text>KSEA 291453Z 08013G28KT 10SM FEW010 BKN040 BKN090 09/04 A2988 RMK AO2 SLP126 T00890044 51010</raw_text>
            <station_id>KSEA</station_id>
            <observation_time>2019-09-29T14:53:00Z</observation_time>
            <latitude>47.45</latitude>
            <longitude>-122.32</longitude>
            <temp_c>8.9</temp_c>
            <dewpoint_c>4.4</dewpoint_c>
            <wind_dir_degrees>80</wind_dir_degrees>
            <wind_speed_kt>13</wind_speed_kt>
            <wind_gust_kt>28</wind_gust_kt>
            <visibility_statute_mi>10.0</visibility_statute_mi>
            <altim_in_hg>29.878937</altim_in_hg>
            <sea_level_pressure_mb>1012.6</sea_level_pressure_mb>
            <quality_control_flags>
                <auto_station>TRUE</auto_station>
            </quality_control_flags>
            <sky_condition sky_cover="FEW" cloud_base_ft_agl="1000" />
            <sky_condition sky_cover="BKN" cloud_base_ft_agl="4000" />
            <sky_condition sky_cover="BKN" cloud_base_ft_agl="9000" />
            <flight_category>VFR</flight_category>
            <three_hr_pressure_tendency_mb>1.0</three_hr_pressure_tendency_mb>
            <metar_type>METAR</metar_type>
            <elevation_m>136.0</elevation_m>
        </METAR>
    </data>
</response>`;

const kfmy = `<?xml version="1.0" encoding="UTF-8"?>
<response xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XML-Schema-instance" version="1.2" xsi:noNamespaceSchemaLocation="http://aviationweather.gov/adds/schema/metar1_2.xsd">
  <request_index>37834267</request_index>
  <data_source name="metars" />
  <request type="retrieve" />
  <errors />
  <warnings />
  <time_taken_ms>5</time_taken_ms>
  <data num_results="1">
    <METAR>
      <raw_text>KFMY 030153Z AUTO 09008KT 10SM CLR 27/22 A2992 RMK AO2 SLP135 T02720217</raw_text>
      <station_id>KFMY</station_id>
      <observation_time>2019-10-03T01:53:00Z</observation_time>
      <latitude>26.58</latitude>
      <longitude>-81.87</longitude>
      <temp_c>27.2</temp_c>
      <dewpoint_c>21.7</dewpoint_c>
      <wind_dir_degrees>90</wind_dir_degrees>
      <wind_speed_kt>8</wind_speed_kt>
      <visibility_statute_mi>10.0</visibility_statute_mi>
      <altim_in_hg>29.920275</altim_in_hg>
      <sea_level_pressure_mb>1013.5</sea_level_pressure_mb>
      <quality_control_flags>
        <auto>TRUE</auto>
        <auto_station>TRUE</auto_station>
      </quality_control_flags>
      <sky_condition sky_cover="CLR" />
      <flight_category>VFR</flight_category>
      <metar_type>METAR</metar_type>
      <elevation_m>4.0</elevation_m>
    </METAR>
  </data>
</response>`;

const ksfo = `<?xml version="1.0" encoding="UTF-8"?>
<response xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XML-Schema-instance" version="1.2" xsi:noNamespaceSchemaLocation="http://aviationweather.gov/adds/schema/metar1_2.xsd">
  <request_index>24485817</request_index>
  <data_source name="metars" />
  <request type="retrieve" />
  <errors />
  <warnings />
  <time_taken_ms>14</time_taken_ms>
  <data num_results="1">
    <METAR>
      <raw_text>KSFO 030156Z 28017KT 10SM FEW180 17/07 A2997 RMK AO2 SLP149 T01670067</raw_text>
      <station_id>KSFO</station_id>
      <observation_time>2019-10-03T01:56:00Z</observation_time>
      <latitude>37.62</latitude>
      <longitude>-122.37</longitude>
      <temp_c>16.7</temp_c>
      <dewpoint_c>6.7</dewpoint_c>
      <wind_dir_degrees>280</wind_dir_degrees>
      <wind_speed_kt>17</wind_speed_kt>
      <visibility_statute_mi>10.0</visibility_statute_mi>
      <altim_in_hg>29.970472</altim_in_hg>
      <sea_level_pressure_mb>1014.9</sea_level_pressure_mb>
      <quality_control_flags>
        <auto_station>TRUE</auto_station>
      </quality_control_flags>
      <sky_condition sky_cover="FEW" cloud_base_ft_agl="18000" />
      <flight_category>VFR</flight_category>
      <metar_type>METAR</metar_type>
      <elevation_m>3.0</elevation_m>
    </METAR>
  </data>
</response>`;

const mockMetars = { ksea, kfmy, ksfo };

module.exports = mockMetars;