import React from 'react'
import Song from './Song'
import Footer from './Footer'

export default function Songs(){
    return (
        <div className="min-h-screen flex flex-col bg-gray-50 sm:pt-[8.333vh]">
            <main className="flex-1 px-4 py-6 sm:px-8 lg:px-20">
                <h1 className="text-3xl font-bold text-center mb-8">
                    Bài Hát Sinh Hoạt
                </h1>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    <Song 
                        title="Trầm Hương Đốt" 
                        lyrics={`Trầm hương đốt, xông ngát mười phương
                        Nguyện nguyện kính đức Nghiêm Từ vô lượng
                        Cầu cầu xin chứng tâm thành chúng con
                        Vần vần khói kết mây lành cúng dường
                        Đạo nhiệm màu đã lang truyền nơi cùng nơi
                        Nhờ chân lý chúng sanh đều thoát luân hồi
                        Đồng qúy kính qùy dưới đài sen
                        Dâng hoa thơm tinh khiết màu thắm tươi cành
                        Đài quang minh sáng huy hoàng trang nghiêm
                        Ơn mười phương điều ngự hào quang an lành
                        Nhìn đạo uyển chuyễn soi khắp cùng quần sanh
                        Phật đạo đồng cùng nhau tu tin tấn mau viên thành
                        Nam mô Bổn Sư Thích Ca Mâu Ni Phật
                        Nam mô Bổn Sư Thích Ca Mâu Ni Phật`} 
                    />

                    <Song 
                        title="Bốn Phương Trời" 
                        lyrics={`Bốn phương trời ta về đây chung vui,
                        Không phân chia giọng nói tiếng cười,
                        Cùng nắm tay ta kết tình thân ái,
                        Trao cho nhau những gì thiết tha`} 
                    />

                    <Song 
                        title="Anh Em Ta Về" 
                        lyrics={`Anh em ta về cùng nhau ta quây quần này, 1-2-3-4-5
                        Anh em ta về cùng nhau ta sum họp này, 5-4-3-2-1
                        Một đều chân bước nhé
                        Hai quay nhìn nhau đi
                        Ba cầm tay chắc nhé, ko muốn ai chia lìa
                        Bốn nhớ rằng chúng ta bốn bể anh em một nhà
                        Năm nhớ mãi tình người trong câu ca`} 
                    />

                </div>
            </main>

            <Footer />
        </div>
    )
}
