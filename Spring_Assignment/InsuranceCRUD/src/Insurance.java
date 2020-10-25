
public class Insurance {
	
	private int policy_number;
	private String policy_name;
	private String policy_tenure;
	private int amount;
	
	
	public Insurance() {};
	public int getPolicy_number() {
		return policy_number;
	}
	public void setPolicy_number(int policy_number) {
		this.policy_number = policy_number;
	}
	public String getPolicy_name() {
		return policy_name;
	}
	public void setPolicy_name(String policy_name) {
		this.policy_name = policy_name;
	}
	public String getPolicy_tenure() {
		return policy_tenure;
	}
	public void setPolicy_tenure(String policy_tenure) {
		this.policy_tenure = policy_tenure;
	}
	public int getAmount() {
		return amount;
	}
	public void setAmount(int amount) {
		this.amount = amount;
	}
	public Insurance(int policy_number, String policy_name, String policy_tenure, int amount) {
		super();
		this.policy_number = policy_number;
		this.policy_name = policy_name;
		this.policy_tenure = policy_tenure;
		this.amount = amount;
	}
	

}
