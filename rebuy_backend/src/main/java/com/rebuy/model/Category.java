package com.rebuy.model;

import javax.persistence.Entity;
import javax.persistence.Id;

import lombok.Data;

@Data
@Entity
public class Category {

	@Id
	private int Id;
	private String type;
}
