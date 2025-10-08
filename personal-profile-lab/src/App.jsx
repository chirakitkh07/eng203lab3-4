import React from 'react';
import ProfileCard from './ProfileCard';

function App() {
    // ข้อมูลโปรไฟล์ตัวอย่าง
    const sampleProfile = {
        name: "จิรกิตติ์ คำป่าตัน",
        studentId: "67543210014-6",
        major: "วิศวกรรมซอฟต์แวร์",
        year: 2,
        age: 21,
        gpa: 3.00,
        email: "chirakit_kh67@live.rmutl.ac.th",
        hobbies: [
            "ทำอาหาร",
            "เล่นเกม",
            "ดูหนัง",
            "ฟังเพลง",
            "ออกำลังกาย"
        ],
        skills: [
            "JavaScript",
            "React.js",
            "HTML/CSS",
            "Python",
            "Git",
            "Node.js"
        ],
        // TODO: นักศึกษาจะเพิ่ม fields เพิ่มเติมใน Challenge
         socialLinks: [
        { name: "GitHub", url: "https://github.com/chirakitkh07" },
      
        // เพิ่มเติมตามต้องการ
    ]
    };

    return (
        <div style={{ 
            minHeight: '100vh', 
            background: 'linear-gradient(45deg, #f0f2f5 0%, #e8eaf6 100%)',
            padding: '20px'
        }}>
            <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                <h1 style={{ 
                    color: '#333', 
                    fontSize: '32px',
                    margin: '20px 0'
                }}>
                    🎓 Personal Profile Card
                </h1>
                <p style={{ color: '#666', fontSize: '16px' }}>
                    
                </p>
            </div>
            
            <ProfileCard profile={sampleProfile} />
        </div>
    );
}

export default App;