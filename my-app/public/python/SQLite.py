import sqlite3

# sql = 'SELECT * FROM Member'
# 變數
# table = 表格名稱
# column = 只取用該表格的欄位
# condition = Where限制式
class SQLiteConnection:
    def __init__(self):
         # Connect
        self.SQLConnection = sqlite3.connect("database.db")
        self.SQLCursor = self.SQLConnection.cursor()
        
    # Execute query
    def execute(self, e_query):
        self.SQLCursor.execute(e_query)
        self.SQLConnection.commit()
    # Execute query
    def execute_select(self, table, column, condition):
        print(table)
        sql = f'SELECT {column} FROM {table} {condition}'
        self.execute(sql)

        return self.SQLCursor.fetchall()

    def execut_insert(self, table, column, condition):
        sql = f'SELECT {column} FROM {table} {condition}'
        self.execute(sql)

        return self.SQLCursor.fetchall()
    def execut_update(self, table, column, condition):
        sql = f'SELECT {column} FROM {table} {condition}'
        self.execute(sql)
        
        return self.SQLCursor.fetchall()

    # Execute delete
    def execut_delete(self, table, column ,condition):
        sql = f'SELECT {column} FROM {table} {condition}'
        self.execute(sql)
        
        return self.SQLCursor.fetchall()