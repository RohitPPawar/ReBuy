package com.rebuy.model;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import lombok.Data;

@Data
@Entity
@Table(name = "users")
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int Id;
	private String firstName;
	private String lastName;
	
	@Column(unique = true)
	private String emailId;
	private String password;
	private String collegeName;

	@OneToMany(mappedBy = "user")
	private List<Address> addresses;

	@OneToMany(mappedBy = "user")
	private List<Mobile> mobiles;

	@OneToMany(mappedBy = "uploadedBy")
	private List<Product> products;

}
