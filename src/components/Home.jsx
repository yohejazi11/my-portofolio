import { useState, useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';

function Home() {
    const [scrollScale, setScrollScale] = useState(1);
    const [borderRadius, setBorderRadius] = useState('50%');
    const [yellowCirclePosition, setYellowCirclePosition] = useState({
        top: '-15%',
        right: '-15%',
    });
    const [yellowScale, setYellowScale] = useState(1);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const maxScale = window.innerWidth / (0.65 * window.innerWidth);

            const scale = Math.min(1 + scrollY / 500, maxScale);

            const newBorderRadius = `${Math.max(50 - scrollY / 10, 0)}%`;

            const newYellowTop = Math.min(-15 + scrollY / 10, 0) + '%';
            const newYellowRight = Math.min(-15 + scrollY / 15, 0) + '%';

            setScrollScale(scale);
            setBorderRadius(newBorderRadius);

            // زيادة حجم المربع الأصفر تدريجيًا ليطابق الأزرق
            const yellowScaleValue = Math.min(1 + scrollY / 500, maxScale);
            setYellowScale(yellowScaleValue);

            setYellowCirclePosition({
                top: newYellowTop,
                right: newYellowRight,
            });
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="relative w-[100%] h-[100vh] ">
            <div className="h-[100vh] w-[100%] relative overflow-hidden">
                {/* الدائرة التي تتحول إلى مربع */}
                <div
                    className="absolute z-[1] left-[-10%] w-[65vw] h-[65vw] bg-[#4793AF]"
                    style={{
                        transform: `scale(${scrollScale})`,
                        borderRadius: borderRadius,
                    }}
                ></div>

                {/* المربع الأصفر */}
                <div
                    className="absolute z-[0] rounded-full bg-[#FFC470] "
                    style={{
                        width: `${window.innerWidth < 1024 ? '80vw' : '65vw'}`,
                        height: `${window.innerWidth < 1024 ? '80vw' : '65vw'}`,
                        top: yellowCirclePosition.top,
                        right: yellowCirclePosition.right,
                        borderRadius: borderRadius,
                        transform: `scale(${yellowScale})`,
                    }}
                ></div>
            </div>

            {/* النصوص */}
            <div className=" absolute flex flex-col gap-y-[1rem] top-[10vh] h-[85%] w-[90%] p-[20px] z-10 text-[6rem] font-semibold text-white">
                <p className="border-t-[1px] border-white w-[fit-content] self-start px-[20px] text-border">
                    <TypeAnimation
                        sequence={[
                            'HELLO', // النص الأول
                            20000,    // تأخير لمدة 1 ثانية بعد الكتابة
                            '',      // حذف النص
                            1000,    // تأخير قبل إعادة الكتابة
                        ]}
                        wrapper="span"
                        cursor={false} // إذا أردت المؤشر، اجعلها true
                        speed={1} // سرعة الكتابة
                        repeat={1} // التكرار بشكل لا نهائي
                        deletionSpeed={1} // سرعة الحذف
                    />
                </p>
                <p className="text-right border-t-[1px] border-white w-[fit-content] self-end px-[20px] max-xl:text-[4rem] text-border">
                <TypeAnimation
                        sequence={[
                            'I AM YOUSEF HEJAZI', // النص الأول
                            20000,    // تأخير لمدة 1 ثانية بعد الكتابة
                            '',      // حذف النص
                            1000,    // تأخير قبل إعادة الكتابة
                        ]}
                        wrapper="span"
                        cursor={false} // إذا أردت المؤشر، اجعلها true
                        speed={2} // سرعة الكتابة
                        repeat={0} // التكرار بشكل لا نهائي
                        deletionSpeed={1} // سرعة الحذف
                    />
                    </p>
                <p className="border-t-[1px] border-white w-[fit-content] self-start px-[20px] max-xl:text-[3rem] max-sm:text-[1.5rem] text-border">
                <TypeAnimation
                        sequence={[
                            'FRONT-END DEVELOPER', // النص الأول
                            20000,    // تأخير لمدة 1 ثانية بعد الكتابة
                            '',      // حذف النص
                            1000,    // تأخير قبل إعادة الكتابة
                        ]}
                        wrapper="span"
                        cursor={true} // إذا أردت المؤشر، اجعلها true
                        speed={3} // سرعة الكتابة
                        repeat={0} // التكرار بشكل لا نهائي
                        deletionSpeed={1} // سرعة الحذف
                    />
                    </p>

            </div>
        </div>
    );
}

export default Home;

