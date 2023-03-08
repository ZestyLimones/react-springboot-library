package com.luv2code.springbootlibrary.dao;

import com.luv2code.springbootlibrary.entity.Book;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BooKRepository extends JpaRepository<Book, Long> {
}
