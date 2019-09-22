package com.example.demo.dao;

import com.example.demo.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

/**
 * Created by @kmartin62
 */
public interface UserRepository extends JpaRepository<User,Integer> {
    List<User> findByEmail(String email);
}
