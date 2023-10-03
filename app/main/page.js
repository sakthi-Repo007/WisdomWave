"use client";
import React, { useEffect, useState } from "react";
import "C:/Users/sarav/OneDrive/Desktop/wisdom-wave/app/main/style.css";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  const [text, setText] = useState("");
  const [source, setSource] = useState("");
  const [category, setCategory] = useState("");
  const [storedText, setStoredText] = useState([]);

  useEffect(() => {
    const storedText = localStorage.getItem("storedText");
    if (storedText) {
      setStoredText(JSON.parse(storedText));
    }
  }, []);

  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  const handleSourceChange = (event) => {
    setSource(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleButtonClick = () => {
    if (text.trim() !== "" && source.trim() !== "" && category.trim() !== "") {
      const updatedTexts = [...storedText, { text, source, category }];
      localStorage.setItem("storedText", JSON.stringify(updatedTexts));
      setStoredText(updatedTexts);
      setText("");
      setSource("");
      setCategory("");
    }
  };

  const handleSourceClick = (sourceUrl) => {
    window.open(sourceUrl, "_blank");
  };

  return (
    <div className="container">
      <title>WISDOM WAVE</title>
      <link
        href="https://fonts.googleapis.com/css2?family=Coiny&family=Sono:wght@400;600&display=swap"
        rel="stylesheet"
      />
      <link href="/style.css" rel="stylesheet" />

      <header className="header">
        <div className="logo">
          <img src="/logo.png" height="68" width="68" alt="wisdom wave Logo" />
          <h1>WISDOM WAVE:DISCOVER,LEARN,GROW</h1>
        </div>

        <button
          className="btn btn-large"
          onClick={() => {
            router.push("/");
          }}
        >
          LOG-OUT
        </button>
      </header>

      <form className="fact-form">
        <input
          type="text"
          placeholder="Share a fact with the world..."
          value={text}
          onChange={handleInputChange}
        />
        <span>200</span>
        <input
          type="text"
          placeholder="Trustworthy source..."
          value={source}
          onChange={handleSourceChange}
        />
        <select value={category} onChange={handleCategoryChange}>
          <option value="">Choose category:</option>
          <option value="technology">Technology</option>
          <option value="science">Science</option>
          <option value="finance">Finance</option>
          <option value="society">Society</option>
          <option value="entertainment">Entertainment</option>
          <option value="health">Health</option>
          <option value="history">History</option>
          <option value="news">News</option>
        </select>
        <button className="btn btn-large" onClick={handleButtonClick}>
          Post
        </button>
      </form>

      <main className="main">
        <aside>
          <ul>
            <li className="category">
              <button className="btn btn-all-categories">All</button>
            </li>
            <li className="category">
              <button
                className="btn btn-category"
                style={{ backgroundColor: "#3b82f6" }}
              >
                Technology
              </button>
            </li>
            <li className="category">
              <button
                className="btn btn-category"
                style={{ backgroundColor: "#16a34a" }}
              >
                Science
              </button>
            </li>
            <li className="category">
              <button
                className="btn btn-category"
                style={{ backgroundColor: "#16a34a" }}
              >
                Finance
              </button>
            </li>
            <li className="category">
              <button
                className="btn btn-category"
                style={{ backgroundColor: "#3b82f6" }}
              >
                Society
              </button>
            </li>
            <li className="category">
              <button
                className="btn btn-category"
                style={{ backgroundColor: "#3b82f6" }}
              >
                Entertainment
              </button>
            </li>
            <li className="category">
              <button
                className="btn btn-category"
                style={{ backgroundColor: "#3b82f6" }}
              >
                Health
              </button>
            </li>
            <li className="category">
              <button
                className="btn btn-category"
                style={{ backgroundColor: "#3b82f6" }}
              >
                History
              </button>
            </li>
            <li className="category">
              <button
                className="btn btn-category"
                style={{ backgroundColor: "#3b82f6" }}
              >
                News
              </button>
            </li>
          </ul>
        </aside>

        <section>
          {storedText.length > 0 ? (
            <ul>
              {storedText.map((item, index) => (
                <li key={index} className="fact">
                  {item.text}
                  <p>
                    <button
                      onClick={() => handleSourceClick(item.source)}
                      className="btn-source"
                    >
                      Source
                    </button>
                  </p>
                  <p
                    className="btn btn-category category"
                    style={{ backgroundColor: "#3b82f6" }}
                  >
                    {item.category}
                  </p>
                </li>
              ))}
            </ul>
          ) : (
            <p>No Stored Text</p>
          )}
        </section>
      </main>
    </div>
  );
};

export default Page;
