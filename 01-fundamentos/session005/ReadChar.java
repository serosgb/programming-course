import java.util.Scanner;

public class ReadChar {
	public static void main(String args[]) {
		String c = "";

		while(c != "S") {
			Scanner scanner = new Scanner(System.in);
			c = scanner.nextLine();
			System.out.println(c);
		}
	}
}


