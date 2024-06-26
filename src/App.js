import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import ThemeSwitcher from "./components/Theme/ThemeSwitcher";
import ThemeProvider from "./components/Theme/ThemeProvider";
import ThemeDisplay from "./components/Theme/ThemeDisplay";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Title from "./components/Title/Title";
import Main from "./components/Main/Main";
import Paragraph from "./components/Paragraph/Paragraph";
import List from "./components/List/List";
import Card from "./components/Card/Card";
import Input from "./components/Input/Input";
import Button from "./components/Button/Button";

function App() {
    const [themeColor, setThemeColor] = useState("light");
    let initialListItems = [
        { name: "first item name", value: "First item" },
        { name: "second item name", value: "Second item" },
        { name: "Third item name", value: "Third item" },
    ];
    const [listItems, setlistItems] = useState(initialListItems);
    const changeTheme = (color) => {
        console.log("theme will change to ", color);
        setThemeColor(color);
    };
    let bckgStyle = {
        backgroundColor:
            themeColor === "light"
                ? "white"
                : themeColor === "dark"
                ? "#020617"
                : "#f59e0b",
        color:
            themeColor === "dark"
                ? "white"
                : themeColor === "light"
                ? "black"
                : "#6d28d9",
    };
    return (
        <ThemeProvider value={{ color: themeColor, changeTheme }}>
            <div className="App" style={bckgStyle}>
                <header className="App-header">
                    <Header>
                        <div></div>
                        <ThemeSwitcher />
                    </Header>
                    <Title level={1}>SimpleUiKit</Title>
                </header>
                {/* <main className="Main">Mon main</main> */}
                <Main>
                    <div className="spaceTop">
                        <Title level={2}>Title h2</Title>
                        <Title level={3}>Title h3</Title>
                        <Title level={4}>Title h4</Title>
                        <Title level={5}>Title h5</Title>
                        <Title level={6}>Title h6</Title>
                    </div>

                    <div className="spaceTop">
                        <Title level={3}>Paragraph</Title>
                        <Paragraph>
                            <div>Ceci est un paragraph...</div>
                            ziefblqskdfbclsqdbcnlksqbdnc, odisfhilqbsdclkb,
                            lqsdfbcpisq. pozhefsd
                            pzhefqsbdncmlqsncmoqhdfizqbsdcqdfscjnqslidcbnxmqsdncznzieà
                            turepogndvlm ndl,es
                        </Paragraph>
                    </div>

                    <div className="spaceTop">
                        <Title level={3}>List</Title>
                        <List
                            title="My list"
                            items={listItems}
                            decoration="'🔥'"
                        />
                    </div>

                    <div className="spaceTop">
                        <Title level={3}>Card</Title>
                        <Card elevated={true}>
                            <div slot="title">Card title</div>
                            <div slot="subtitle">Card sub title</div>
                            <div>Card content</div>
                        </Card>
                    </div>

                    <div className="spaceTop">
                        <Title level={3}>Input</Title>
                        <Input label="My input" />
                        <Input type="password" label="My password input" />
                        <Button type="text" onClick={() => alert("clicked")}>
                            My button
                        </Button>
                    </div>
                </Main>
                <Footer>
                    <div slot="closingLine">
                        Build with ❤️‍🔥 at
                        <a
                            style={{ padding: "0px 5px" }}
                            href="https://www.lacapsule.academy/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            La Capsule Bootcamp
                        </a>
                        in Paris
                    </div>
                    <div>
                        <List
                            title="Contact"
                            items={[
                                {
                                    name: "my github",
                                    value: "github: bzfvrto",
                                    href: "https://github.com/bzfvrto",
                                },
                                {
                                    name: "la capsule",
                                    value: "website: La Capsule",
                                    href: "https://www.lacapsule.academy",
                                },
                            ]}
                        />
                    </div>
                </Footer>
            </div>
        </ThemeProvider>
    );
}

export default App;
