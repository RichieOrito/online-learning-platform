package com.example.onlinelearningplatform.repository;

import com.example.onlinelearningplatform.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByUsername(String username);
}
