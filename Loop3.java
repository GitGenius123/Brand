import java.util.Scanner;
public class Loop3{
	public static void main(String args[]) throws Exception {
		Scanner scan=new Scanner(System.in);
		int a, b;
		char ch='y';
		int count=0;
		while(ch=='y' || ch=='Y'){
			count++;
			System.out.print("Enter first number : ");
			a=scan.nextInt();
			
			System.out.print("Enter second number : ");
			b=scan.nextInt();
			
			System.out.println(a + " + " + b +" = " + (a+b));
			System.out.print("Do you want to run again (y/n)");
			ch=(char)System.in.read();
		
		}
		
		System.out.println("You have run this program " + count + " times");
		
	}
}