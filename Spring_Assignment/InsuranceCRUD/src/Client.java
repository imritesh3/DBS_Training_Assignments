import java.util.Iterator;
import java.util.List;

import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.boot.registry.StandardServiceRegistryBuilder;
import org.hibernate.cfg.Configuration;

public class Client {
	private static SessionFactory factory;
	
	public static void getSessionFactory() {
		try {
			Configuration conf = new Configuration().configure();
			
			StandardServiceRegistryBuilder builder = new StandardServiceRegistryBuilder().applySettings(conf.getProperties());
			factory = conf.buildSessionFactory(builder.build());
			
			
		}
		catch(Throwable ex) {
			System.err.println("Failed to create sessionFactory object."+ex);
			throw new ExceptionInInitializerError(ex);
		}
	}
	
	public static void main(String args[]) {
		try {
			getSessionFactory();
			Client client_1 = new Client();
			
			//client_1.InsertRecordInDatabase(101,"Group term policy","10 years",10000);
			//client_1.InsertRecordInDatabase(102,"Accidental policy","30 years",15000);
			client_1.DisplayRecords();

		}
		catch(HibernateException e) {
			System.out.println("Exception is:"+e);		}
	}
	
	
	//insert
	public void InsertRecordInDatabase(int policy_number,String policy_name, String policy_tenure,int amount) {
		Session session = factory.openSession();
		Transaction tx = session.beginTransaction();
		
		Insurance ins = new Insurance(policy_number,policy_name,policy_tenure,amount);
		session.save(ins);
		tx.commit();
		session.close();
		
	}
	
	
	//display
	public void DisplayRecords() throws HibernateException{
		Session session = factory.openSession();
		List inslist = session.createQuery("FROM Insurance").list();
		for(Iterator iterator= inslist.iterator();iterator.hasNext();) {
			Insurance ins = (Insurance) iterator.next();
			System.out.println("Policy Number: "+ins.getPolicy_number());
			System.out.println("Policy Name: "+ins.getPolicy_name());
			System.out.println("Policy Tenure: "+ins.getPolicy_tenure());
			System.out.println("Policy Amount: "+ins.getAmount());
		}
		session.close();
		
	}
	
	
	//update
	public void UpdateRecord(int policy_number,int amount) throws HibernateException{
		Session session = factory.openSession();
		Transaction tx = session.beginTransaction();
		
		Insurance ins = (Insurance)session.get(Insurance.class,policy_number);
		ins.setAmount(amount);
		session.update(ins);
		tx.commit();
		session.close();
	}
	
	//delete 
	public void DeleteRecord(int policy_number)throws HibernateException{
		Session session = factory.openSession();
		Transaction tx = session.beginTransaction();
		Insurance ins = (Insurance)session.get(Insurance.class,policy_number);
		session.delete(ins);
		tx.commit();
		session.close();
		
	}
	

}
