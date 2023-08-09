import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;

import javax.annotation.Resource;
import javax.naming.Context;
import javax.naming.InitialContext;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.sql.DataSource;

import com.google.gson.JsonObject;

@WebServlet(name = "/LoginServlet", urlPatterns="/api/login")
public class LoginServlet extends HttpServlet {

    private String weather_text_field;

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {
        this.weather_text_field = request.getParameter("weathertext");

        String userAgent = request.getHeader("User-Agent");
        System.out.println("received request");
        System.out.println("userAgent: " + userAgent);

        PrintWriter out = response.getWriter();

        try {
            JsonObject responseJsonObject = new JsonObject();

            responseJsonObject.addProperty("status", "success");
            responseJsonObject.addProperty("message", "success");

            response.getWriter().write(responseJsonObject.toString());
            response.setStatus(200);

        } catch (Exception e) {
            System.out.println(e);
            JsonObject jsonObject = new JsonObject();
            jsonObject.addProperty("errorMessage", e.getMessage());
            out.write(jsonObject.toString());
            response.setStatus(500);
        }
    }

}