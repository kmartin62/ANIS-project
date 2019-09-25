FROM openjdk:8
ADD target/users-mysql.jar user-mysql.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "user-mysql.jar"]