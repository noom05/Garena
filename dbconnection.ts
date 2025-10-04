import mysql from "mysql2";

export const conn = mysql.createPool({
  connectionLimit: 10,
  host: "sql.freedb.tech",
  user: "freedb_lunire",
  password: "#bd!RGdruUNzX8n",
  database: "freedb_game_database",
});

conn.query("SELECT * FROM user", (err, results) => {
  if (err) {
    console.error("เกิดข้อผิดพลาดในการเชื่อมต่อ:", err);
  } else {
    console.log("ข้อมูลจาก users:", results);
  }
});
