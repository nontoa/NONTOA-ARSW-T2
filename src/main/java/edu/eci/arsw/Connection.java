package edu.eci.arsw;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;

import org.springframework.stereotype.Service;

@Service
public class Connection {

    private static final String USER_AGENT = "Mozilla/5.0";
    private static  String city;
    private  static String openWeatherMapKey = "c5d0d45f9dc4e3bf488c0316e2ca2364";
    private static  String GET_URL = "http://api.openweathermap.org/data/2.5/weather?q="+city+"&APPID=c5d0d45f9dc4e3bf488c0316e2ca2364";

    public static String connection() throws IOException {     
        

        URL obj = new URL(GET_URL);
        HttpURLConnection con = (HttpURLConnection) obj.openConnection();
        con.setRequestMethod("GET");
        con.setRequestProperty("User-Agent", USER_AGENT);
        int responseCode = con.getResponseCode();
        //System.out.println("GET Response Code :: " + responseCode);
        if (responseCode == HttpURLConnection.HTTP_OK) {
            BufferedReader in = new BufferedReader(new InputStreamReader(
                    con.getInputStream()));
            String inputLine;
            StringBuffer response = new StringBuffer();
            while ((inputLine = in.readLine()) != null) {
                response.append(inputLine);
            }
            in.close();
            return(response.toString());
        } else {
            System.out.println("GET request not worked");
        }
        return null;
    }

    public static void setCity(String c){
        GET_URL="http://api.openweathermap.org/data/2.5/weather?q="+c+"&APPID=df74c112a5dfd8ba80bb24b45eb5a4be";


    } 

}