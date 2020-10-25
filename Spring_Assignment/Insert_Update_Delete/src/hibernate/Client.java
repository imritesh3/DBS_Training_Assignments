package hibernate;

import java.util.Iterator;
import java.util.List;

import org.hibernate.Criteria;
import org.hibernate.HibernateException;
import org.hibernate.SQLQuery;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.boot.registry.StandardServiceRegistryBuilder;
import org.hibernate.cfg.Configuration;
import org.hibernate.criterion.Restrictions;

public class Client {
	
	private static SessionFactory factory;
	
	public static void getSessionFactory() {
		
		try {
			Configuration conf = new Configuration().configure();
			StandardServiceRegistryBuilder builder = new StandardServiceRegistryBuilder().applySettings(conf.getProperties());
			factory = conf.buildSessionFactory(builder.build());
		}
		catch(Throwable ex) {
			System.out.println("Failed to create sessionFactory object:"+ex);
			throw new ExceptionInInitializerError(ex);
		}
		
		
		
	}
	public static void main(String args[]) {
		try {
			getSessionFactory();
			Client client_1 = new Client();
			
			
			//client_1.InsertRecordInDatabase(1,"Ritesh","Keshaboin",10000);
			//client_1.InsertRecordInDatabase(2,"Varun","Keshaboin",20000);
	        //client_1.InsertRecordInDatabase(3,"Madhavi","Nimmala",40000);

			
			System.out.println("Displaying Records in Table");
			client_1.DisplayRecords();
			
			System.out.println();
			
			System.out.println("Displaying Records in Table using Native SQL");
			client_1.DisplayRecords_NativeSQL();
			
			
			System.out.println();

			
			System.out.println("Updating Employee Record in Table");
			client_1.UpdateRecord(2,25000);
			System.out.println("Record updated");
			client_1.DisplayRecords();

			
			System.out.println();
		//	System.out.println("Deleting a record");
		//	client_1.DeleteRecord(1);
			
			
			System.out.println("Displaying Records with Criteria And Restrictions");
			client_1.DisplayRecordsWithCriteria();

			
		}
		catch(HibernateException e) {
			System.out.println("Exception is : " +e);
		}

	}
	
	public void InsertRecordInDatabase(int id, String fname,String lname,int salary) throws HibernateException{
		Session session = factory.openSession();
		Transaction tx = session.beginTransaction();
		Employee e1 = new Employee(id,fname,lname,salary);
		session.save(e1);
		tx.commit();
		session.close();
	}
	
	public void DisplayRecords() throws HibernateException{
		Session session = factory.openSession();
		List empLst = session.createQuery("FROM Employee").list();
		
		for(Iterator iterator = empLst.iterator(); iterator.hasNext();) {
			Employee emp = (Employee) iterator.next();
			System.out.println("First Name: "+emp.getFirstName());
			System.out.println("Last Name: "+emp.getLastName());
			System.out.println("Salary :" + emp.getSalary());
		}
		session.close();
	}
	
	public void DisplayRecordsWithCriteria() throws HibernateException{
		Session session = factory.openSession();
		Criteria cr = session.createCriteria(Employee.class);
		cr.add(Restrictions.gt("salary",25000));
		List employees = cr.list();
		
		for(Iterator iterator = employees.iterator(); iterator.hasNext();) {
			Employee emp = (Employee) iterator.next();
			System.out.println("First Name: "+emp.getFirstName());
			System.out.println("Last Name: "+emp.getLastName());
			System.out.println("Salary :" + emp.getSalary());
		}
		session.close();
		
		
	}
	
	public void DisplayRecords_NativeSQL() throws HibernateException{
		Session session = factory.openSession();
		String sql ="SELECT * FROM employee_table where salary >10000";
		SQLQuery query = session.createSQLQuery(sql);
		query.addEntity(Employee.class);
		List results = query.list();
		
		for(Iterator iterator = results.iterator(); iterator.hasNext();) {
			Employee emp = (Employee) iterator.next();
			System.out.println("First Name: "+emp.getFirstName());
			System.out.println("Last Name: "+emp.getLastName());
			System.out.println("Salary :" + emp.getSalary());
		}
		session.close();
	}
	
	public void UpdateRecord(int EmpId,int salary) throws HibernateException{
		Session session = factory.openSession();
		Transaction tx = session.beginTransaction();
		Employee employee = (Employee)session.get(Employee.class,EmpId);
		employee.setSalary(salary);
		tx.commit();
		session.close();
	}
	
	
	public void DeleteRecord(int EmployeeID) throws HibernateException{
		Session session = factory.openSession();
		Transaction tx = session.beginTransaction();
		Employee employee = (Employee)session.get(Employee.class,EmployeeID);
		session.delete(employee);
		tx.commit();
		session.close();
		
	}
	
	
}
