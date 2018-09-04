## 請解釋後端與前端的差異。
前端：處理畫面、送 request 給 server、處理收到的 response
後端：處理邏輯、負責和 DB 拿資料、接收 request 並回傳 response

## 假設我今天去 Google 首頁搜尋框打上：JavaScript 並且按下 Enter，請說出從這一刻開始到我看到搜尋結果為止發生在背後的事情。
1. 送出 request，方法為 GET，把 JavaScript 帶到網址
2. google 的 server 收到 request 
3. google server 以 JavaScript 當關鍵字，在 DB 中搜尋
4. google 以 response 回傳搜尋結果
5. 瀏覽器收到 response，判斷此 response 來源的安全性，決定是否於瀏覽器中呈現
6. 跳到新的頁面，瀏覽器呈現搜尋結果

## 請列舉出 5 個 command line 指令並且說明功用
1. mkdir 新建資料夾
2. rm 刪除
3. cd 移動到...
4. ls 列出這個資料夾有的檔案
5. cp 複製檔案