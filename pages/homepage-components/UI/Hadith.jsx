"use-client";
import React, { useEffect, useState } from "react";
import { Kaushan_Script } from "next/font/google";

const kaushan_script = Kaushan_Script({ subsets: ["latin"], weight: "400" });

const DUMMY_Hadiths = [
  {
    id: "h1",
    bookName: `Sahih Bukhari `,
    hadithNumber: `Volume 6, Book 61, Number 507`,
    narratedBy: "Narrated Anas bin Malik",
    narration: `(The Caliph 'Uthman ordered Zaid bin Thabit, Said bin Al-As, 'Abdullah bin Az-Zubair and 'Abdur-Rahman bin Al-Harith bin Hisham to write the Quran in the form of a book (Mushafs) and said to them. "In case you disagree with Zaid bin Thabit (Al-Ansari) regarding any dialectic Arabic utterance of the Quran, then write it in the dialect of Quraish, for the Quran was revealed in this dialect." So they did it.`,
  },
  {
    id: "h1",
    bookName: `Sahih Bukhari`,
    hadithNumber: ` Volume 6, Book 61, Number 502:`,
    narratedBy: "Narrated 'Aisha and Ibn 'Abbas",
    narration: `The Prophet remained in Mecca for ten years, during which the Qur'an used to be revealed to him; and he stayed in Medina for ten years.`,
  },
  {
    id: "h1",
    bookName: "Sahih Bukhari",
    hadithNumber: `Volume 6, Book 61, Number 503:`,
    narratedBy: "Narrated Abu 'Uthman:",
    narration: `I was informed that Gabriel came to the Prophet while Um Salama was with him. Gabriel started talking (to the Prophet). Then the Prophet asked Um Salama, "Who is this?" She replied, "He is Dihya (al-Kalbi)." When Gabriel had left, Um Salama said, "By Allah, I did not take him for anybody other than him (i.e. Dihya) till I heard the sermon of the Prophet wherein he informed about the news of Gabriel." The subnarrator asked Abu 'Uthman: From whom have you heard that? Abu 'Uthman said: From Usama bin Zaid.`,
  },
];

function Hadith(props) {
  //   const { bookName, hadithNumber, narration, naratedBy } = props;
  const [hadithIndex, setHadithIndex] = useState();
  let hadithIndexNumber;
  useEffect(() => {
    hadithIndexNumber = Math.trunc(Math.random() * DUMMY_Hadiths.length);
    setHadithIndex(hadithIndexNumber);
  }, []);

  return (
    hadithIndex !== undefined && (
      <>
        <div
          className={`text-center ${kaushan_script.className} font-normal space-y-4`}
        >
          <p className="text-xl text-green-600">
            {DUMMY_Hadiths[hadithIndex].bookName}
          </p>
          <p className="text-2xl text-green-600">
            {DUMMY_Hadiths[hadithIndex].narratedBy}
          </p>
          <p className="text-lg">{DUMMY_Hadiths[hadithIndex].narration}</p>
          <p className=" text-green-600">
            {DUMMY_Hadiths[hadithIndex].hadithNumber}
          </p>
        </div>
      </>
    )
  );
}

export default Hadith;
