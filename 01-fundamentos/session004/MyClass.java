public class MyClass {
	
    public static void main(String args[]) {
		java.util.Random random = new java.util.Random();
		int generateNumber = random.nextInt(10)+ 1;

		java.util.Scanner sc = new java.util.Scanner(System.in);
		String guessedNumber = sc.nextLine();

		int num = Integer.parseInt(guessedNumber);

		if (generateNumber == num) {
			System.out.println("Felicidades acertaste");
		} else {
			System.out.println("Fallaste el numero fue " + generateNumber);
		}

	}
}