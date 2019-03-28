package edu.eci.arsw;

import java.io.IOException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.HashMap;

/**
 * 
 * @author 2137516
 */
@Service
public class weatherServices {

    public static HashMap<String, String> cities;

    /**
     * 
     * @param name
     * @return
     * @throws IOException 
     */
    public String getWeather(String name) throws IOException {
        /*if (cities.get(name) == null) {
            String consulta;
            Connection.setCity(name);
            consulta = Connection.connection();
            cities.put(name, consulta);
            return consulta;

        } else {
            return cities.get(name);
        }*/
        String consulta;
        Connection.setCity(name);
        consulta = Connection.connection();
        return consulta;
    }

}
