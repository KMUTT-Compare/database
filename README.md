# Database -MongoDB 🎁
## **ทีม JIPJIP (cp24kk2)** <br/>
**Topic:** KMUTT Compare 
   คือ ระบบเปรียบเทียบหอพักสำหรับนักศึกษามหาวิทยาลัยพระจอมเกล้าธนบุรี <br/>

## Project status: `Development` <br/>

## Details
**Database:** MongoDB 🍃 <br/>
คือ Database software ประเภท NoSQL เป็นฐานข้อมูลที่มีความยืดหยุ่นมาก เหมาะกับข้อมูลที่ไม่มีโครงสร้างตายตัว เช่น JSON หรือ Document <br/>
**Version:** 4.4

## Basic Commands <br/>
-สร้าง หรือใช้งาน Database เช่น kmutt_dormitories
```
use kmutt_dormitories
```
-สร้าง Collections เช่น staff collection
```
db.createCollection("staff")
```
-ลบ Collections เช่น staff collection
```
db.mycollection.drop()
```
-ลบ Database เช่น kmutt_dormitories
```
use kmutt_dormitories
db.dropDatabase()
```
