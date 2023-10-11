export const Q1 = "1.Why use next?";
export const A1 =
  "最簡單的回答應該是react官方也推薦大家去用哈哈，但多說一些是比起react他支援SSR還有SSG，...\
這會使SEO比較容易，這在react好像比較難做。";

export const Q2 =
  "2.Explain the styled-component used. What's CSS-in-JS and how does it help?";
export const A2 =
  "我使用了styled-component來套用到border,border-radius,background-color等很基本的樣式，\
同時也更改了圖片大小。CSS-in-JS方便處在於可以把原本的CSS寫在JS檔案裡面，我想網頁讀取會更快。也會比寫CSS更好維護\
（因為，CSS很容易很複雜龐大），但在component化的情況下，我還是比較喜歡寫CSS。";

export const Q3 = "3. Discussed about useState and useEffect ";
export const A3 =
  "結論是這個例子我使用了useState，原因是react可以存取一個state，類似讓他存取一個變數的概念，我可以修改它，\
修改的同時會一起同步的渲染一次畫面，所以我就不需要再重整一次網頁。那useEffect通常會使用在畫面一進入後會執行的事件\
（比如打API、歡迎特效等）當然也可以使用dependency的方式將按鈕按下後就更改並重新渲染，但可能會有其他的effect因此受到影響\
（但我對這邊會有什麼effect其實還不是很理解，到目前為止都還在吃老本哈哈哈";

export const Q4 = "4. Describe CSR VS. SSR, how does Next.js achieve it? ";
export const A4 =
  "CSR是將渲染資料的所有過程都交由瀏覽器端處理，使用者在瀏覽網站時，第一次跟伺服器請求的 HTML \
檔裡面幾乎不包含任何的內容，伺服器並沒有傳入資料到 HTML。接著，後續會再透過載入的 bundle，也就是 JavaScript \
的檔案，再讓 JS 執行 AJAX 跟伺服器請求資料，最後將資料渲染到畫面上。而SSR2. 不像過去可能 react 或vue框架要\
 pre-rendering 或 SSR很麻煩SSR (Server Side Rendering)  但問題就在於使用 SSR 就必須有個伺服器一直\
 處理使用者的請求，一直產生有資料的 HTML，並送到瀏覽器端，這樣的工作對於伺服器來說是一個負擔。\
Next.js提供了 getServerSideProps這種方式，使得瀏覽器loading過程中可以直接向伺服器要資料，不必等到瀏覽器加載\
完成後才請求資料，因此實現SSR的一種方式。(補充：但例如useState或useEffect這種會跟使用者互動的功能\
    基本上就得用CSR的方式了（吧？））";

export const Q5 = "5. Which code style did you follow?";
export const A5 = "我先懺悔我本週沒有太多時間可以去研究code style所以我就基本上是follow之前使用airbnb的形式！";
