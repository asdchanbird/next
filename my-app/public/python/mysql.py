import pymysql
#資料庫連線設定
#可縮寫db = pymysql.connect("localhost","root","root","30days" )
db = pymysql.connect(host='localhost', port=3306, user='root', passwd='root', db='test', charset='utf8')
#建立操作游標
cursor = db.cursor()
#SQL語法（查詢資料庫版本）
sql = 'SELECT * FROM member'
#執行語法
cursor.execute(sql)
#選取第一筆結果
data = cursor.fetchall()
print(data)
# print ("Database version : %s " % data)
#關閉連線
db.close()