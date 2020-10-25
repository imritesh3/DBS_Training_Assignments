package com.ritesh.controller;

import java.util.HashMap;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.ritesh.model.Employee;

@RestController
@RequestMapping("/payroll")
public class EmployeeController {
	
	@RequestMapping(value="/{id}" , method= RequestMethod.GET)
	public String getSalary(@PathVariable int id) {
		
		HashMap<Integer, Employee> hm = new HashMap<Integer, Employee>();
		hm.put(1, new Employee(1,"Ritesh",50000,3000,2000,500));
		hm.put(2, new Employee(2,"Gautam",55000,4000,2000,800));
		
		Employee emp=null;
		if(hm.containsKey(id)) {
			emp=hm.get(id);
		}
		
		emp.setGross_sal(emp.getBasic() + emp.getHra() + emp.getAllowance());
		
		emp.setFinal_deductions((int)(emp.getDeductions() + (emp.getDeductions()*0.2)));
		emp.setTotal_sal(emp.getGross_sal()-emp.getFinal_deductions());
		
		return emp.toString();

	}
	
	@RequestMapping(value="/display", method=RequestMethod.POST)
	public ResponseEntity<String> createEmployee(@RequestBody String name){
		System.out.println(name);
		return new ResponseEntity(HttpStatus.CREATED);
	}

}
