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
		
		String url = "http://softuni.bg/";
		int levels = 3;
		
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
		
		if (pageUrl.endsWith("/")) {
			pageUrl = pageUrl.substring(0, pageUrl.length() - 1);
		}
		
		Document document = Jsoup.connect(pageUrl).get();
		
		Elements links = document.getElementsByTag("a");
			
		for (Element link : links) {
			
			if (link.attr("href").startsWith("/") &&
					!checkIsLinkVisited(pageUrl + link.attr("href"))) {
				
				storeVisitedLinks(pageUrl + link.attr("href"));				
				crawlPage(pageUrl + link.attr("href"), depth - 1);
				
			} else if (link.attr("href").startsWith("http") &&
					!checkIsLinkVisited(link.attr("href"))) {
				
				storeVisitedLinks(link.attr("href"));
				crawlPage(link.attr("href"), depth - 1);
				
			} else {
				// skip empty links like #
			}
		}
	}
	
	public static void storeVisitedLinks(String visitedUrl) throws IOException {
		
		try (BufferedWriter fileWriter = new BufferedWriter(new FileWriter("crawled-urls.txt", true))) {
			fileWriter.write(visitedUrl + System.lineSeparator());
		}
	}
	
	public static boolean checkIsLinkVisited(String linkUrl) throws IOException {
		boolean isVisited = false;
		
		try (BufferedReader fileReader = new BufferedReader(new FileReader("crawled-urls.txt"))) {
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
