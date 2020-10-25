import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Client {
	
	public static void main(String args[])
	{
		ApplicationContext context = new ClassPathXmlApplicationContext("helloBean.xml");
		
		Employee emp = (Employee) context.getBean("hello");
		System.out.println("Employee details are");
		System.out.println("Employee id is: "+emp.getEmpId());
		System.out.println("Employee name is: "+emp.getName());
		System.out.println("Employee designation is: "+emp.getDesignation());
		System.out.println("Employee dept is: "+emp.getDept()); 

		
		
		
	}

}
