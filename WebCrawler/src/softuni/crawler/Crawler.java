package softuni.crawler;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

public class Crawler {
	
	static final String OUTPUT_FILE = "crawled-urls.txt";
	
	public static void main(String[] args) {
		
		String url = "https://softuni.bg/";
		int levels = 2;
		
		try {
			createFile();
			crawlPage(url, levels);
		} catch (IOException e) {
			System.out.println("Something is wrong. Try again later.");
			e.printStackTrace();
		}
		
	}
	
	public static void createFile() throws IOException {
		File output = new File(OUTPUT_FILE);
		
		if (output.exists()) {
			output.delete();
		}
		
		output.createNewFile();
	}
	
	public static void crawlPage(String pageUrl, int depth) throws IOException {
		
		if (depth == 0) {
			return;
		}
		
		Document document = Jsoup.connect(pageUrl).userAgent("Chrome").timeout(3000).get();
		
		Elements links = document.getElementsByTag("a");
			
		for (Element link : links) {
			
			if (link.attr("abs:href").toLowerCase().endsWith("pdf")) {
				
				// skip pdf files
				
			} else if (!checkIsLinkVisited(link.attr("abs:href"))) {
				
				storeVisitedLinks(link.attr("abs:href"));
				crawlPage(link.attr("abs:href"), depth - 1);
				
			} else {
				
				// skip empty links like #
				
			}
		}
	}
	
	public static void storeVisitedLinks(String visitedUrl) throws IOException {
		
		try (BufferedWriter fileWriter = new BufferedWriter(new FileWriter(OUTPUT_FILE, true))) {
			fileWriter.write(visitedUrl + System.lineSeparator());
		}
	}
	
	public static boolean checkIsLinkVisited(String linkUrl) throws IOException {
		boolean isVisited = false;
		
		try (BufferedReader fileReader = new BufferedReader(new FileReader(OUTPUT_FILE))) {
			String currentUrl = fileReader.readLine();
			
			while (currentUrl != null) {
				if (currentUrl.equalsIgnoreCase(linkUrl)) {
					isVisited = true;
					break;
				}
				currentUrl = fileReader.readLine();
			}
		}
		
		return isVisited;
	}
	
}
