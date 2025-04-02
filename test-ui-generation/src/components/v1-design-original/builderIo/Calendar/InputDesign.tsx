"use client";
import React from "react";
import styles from "./InputDesign.module.css";

function InputDesign() {
    return (
        <section className={styles.calendarContainer} role="region" aria-label="October Calendar">
            <header>
                <h2 className={styles.monthTitle}>Octobre</h2>
                <div className={styles.weekDaysHeader}>
                    <span className={styles.weekDay}>Lun.</span>
                    <span className={styles.weekDay}>Mar.</span>
                    <span className={styles.weekDay}>Mer.</span>
                    <span className={styles.weekDay}>Jeu.</span>
                    <span className={styles.weekDay}>Ven.</span>
                    <span className={styles.weekDay}>Sam.</span>
                    <span className={styles.weekDay}>Dim.</span>
                </div>
            </header>

            <div className={styles.calendarGrid} role="grid">
                <div className={styles.firstDayOffset}>
                    <div>
                        <div
                            dangerouslySetInnerHTML={{
                                __html: "<svg id='2819:23658' width='48' height='45' viewBox='0 0 48 45' fill='none' xmlns='http://www.w3.org/2000/svg' class='w-[48px] h-[45px]'> <circle cx='22' cy='22' r='17' fill='#91BA6E'></circle> <text fill='white' xml:space='preserve' style='white-space: pre' font-family='Inter' font-size='11' font-weight='600' letter-spacing='0em'><tspan x='19.8574' y='26'>1</tspan></text> <rect x='30' y='27' width='13' height='13' rx='3' fill='#7FAD57' stroke='white' stroke-width='2'></rect> </svg>",
                            }}
                        />
                    </div>
                </div>
                <div>
                    <div>
                        <div
                            dangerouslySetInnerHTML={{
                                __html: "<svg id='2819:23659' width='48' height='45' viewBox='0 0 48 45' fill='none' xmlns='http://www.w3.org/2000/svg' class='w-[48px] h-[45px]'> <circle cx='22' cy='22' r='17' fill='#91BA6E'></circle> <text fill='white' xml:space='preserve' style='white-space: pre' font-family='Inter' font-size='11' font-weight='600' letter-spacing='0em'><tspan x='19.084' y='26'>2</tspan></text> <rect x='30' y='27' width='13' height='13' rx='3' fill='#7FAD57' stroke='white' stroke-width='2'></rect> </svg>",
                            }}
                        />
                    </div>
                </div>
                <div>
                    <div>
                        <div
                            dangerouslySetInnerHTML={{
                                __html: "<svg id='2819:23660' width='48' height='45' viewBox='0 0 48 45' fill='none' xmlns='http://www.w3.org/2000/svg' class='w-[48px] h-[45px]'> <circle cx='22' cy='22' r='17' fill='#91BA6E'></circle> <text fill='white' xml:space='preserve' style='white-space: pre' font-family='Inter' font-size='11' font-weight='600' letter-spacing='0em'><tspan x='18.9175' y='26'>3</tspan></text> <rect x='30' y='27' width='13' height='13' rx='3' fill='#D36A00' stroke='white' stroke-width='2'></rect> </svg>",
                            }}
                        />
                    </div>
                </div>
                <div>
                    <div>
                        <div
                            dangerouslySetInnerHTML={{
                                __html: "<svg id='2819:23661' width='48' height='45' viewBox='0 0 48 45' fill='none' xmlns='http://www.w3.org/2000/svg' class='w-[48px] h-[45px]'> <circle cx='22' cy='22' r='17' fill='#91BA6E'></circle> <text fill='white' xml:space='preserve' style='white-space: pre' font-family='Inter' font-size='11' font-weight='600' letter-spacing='0em'><tspan x='18.8369' y='26'>4</tspan></text> <rect x='30' y='27' width='13' height='13' rx='3' fill='#D36A00' stroke='white' stroke-width='2'></rect> </svg>",
                            }}
                        />
                    </div>
                </div>
                <div>
                    <div>
                        <div
                            dangerouslySetInnerHTML={{
                                __html: "<svg id='2819:23631' width='48' height='45' viewBox='0 0 48 45' fill='none' xmlns='http://www.w3.org/2000/svg' class='w-[48px] h-[45px]'> <circle cx='22' cy='22' r='17' fill='#91BA6E'></circle> <text fill='white' xml:space='preserve' style='white-space: pre' font-family='Inter' font-size='11' font-weight='600' letter-spacing='0em'><tspan x='19.0195' y='26'>5</tspan></text> <rect x='30' y='27' width='13' height='13' rx='3' fill='#D36A00' stroke='white' stroke-width='2'></rect> </svg>",
                            }}
                        />
                    </div>
                </div>
                <div>
                    <div>
                        <div
                            dangerouslySetInnerHTML={{
                                __html: "<svg id='2819:23635' width='48' height='45' viewBox='0 0 48 45' fill='none' xmlns='http://www.w3.org/2000/svg' class='w-[48px] h-[45px]'> <circle cx='22' cy='22' r='17' fill='#D36A00'></circle> <text fill='white' xml:space='preserve' style='white-space: pre' font-family='Inter' font-size='11' font-weight='600' letter-spacing='0em'><tspan x='18.9336' y='26'>6</tspan></text> <rect x='30' y='27' width='13' height='13' rx='3' fill='#D36A00' stroke='white' stroke-width='2'></rect> </svg>",
                            }}
                        />
                    </div>
                </div>
                <div>
                    <div>
                        <div
                            dangerouslySetInnerHTML={{
                                __html: "<svg id='2819:23639' width='48' height='45' viewBox='0 0 48 45' fill='none' xmlns='http://www.w3.org/2000/svg' class='w-[48px] h-[45px]'> <circle cx='22' cy='22' r='17' fill='#D36A00'></circle> <text fill='white' xml:space='preserve' style='white-space: pre' font-family='Inter' font-size='11' font-weight='600' letter-spacing='0em'><tspan x='19.272' y='26'>7</tspan></text> <rect x='30' y='27' width='13' height='13' rx='3' fill='#D36A00' stroke='white' stroke-width='2'></rect> </svg>",
                            }}
                        />
                    </div>
                </div>
                <div>
                    <div>
                        <div
                            dangerouslySetInnerHTML={{
                                __html: "<svg id='2819:23643' width='48' height='45' viewBox='0 0 48 45' fill='none' xmlns='http://www.w3.org/2000/svg' class='w-[48px] h-[45px]'> <circle cx='22' cy='22' r='17' fill='#91BA6E'></circle> <text fill='white' xml:space='preserve' style='white-space: pre' font-family='Inter' font-size='11' font-weight='600' letter-spacing='0em'><tspan x='18.9497' y='26'>8</tspan></text> <rect x='30' y='27' width='13' height='13' rx='3' fill='#D36A00' stroke='white' stroke-width='2'></rect> </svg>",
                            }}
                        />
                    </div>
                </div>
                <div>
                    <div>
                        <div
                            dangerouslySetInnerHTML={{
                                __html: "<svg id='2819:23647' width='48' height='45' viewBox='0 0 48 45' fill='none' xmlns='http://www.w3.org/2000/svg' class='w-[48px] h-[45px]'> <circle cx='22' cy='22' r='17' fill='#97C172'></circle> <text fill='white' xml:space='preserve' style='white-space: pre' font-family='Inter' font-size='11' font-weight='600' letter-spacing='0em'><tspan x='18.9336' y='26'>9</tspan></text> <rect x='30' y='27' width='13' height='13' rx='3' fill='#D36A00' stroke='white' stroke-width='2'></rect> </svg>",
                            }}
                        />
                    </div>
                </div>
                <div>
                    <div>
                        <div
                            dangerouslySetInnerHTML={{
                                __html: "<svg id='2819:23651' width='48' height='45' viewBox='0 0 48 45' fill='none' xmlns='http://www.w3.org/2000/svg' class='w-[48px] h-[45px]'> <circle cx='22' cy='22' r='17' fill='#91BA6E'></circle> <text fill='white' xml:space='preserve' style='white-space: pre' font-family='Inter' font-size='11' font-weight='600' letter-spacing='0em'><tspan x='16.189' y='26'>10</tspan></text> <rect x='30' y='27' width='13' height='13' rx='3' fill='#7FAD57' stroke='white' stroke-width='2'></rect> </svg>",
                            }}
                        />
                    </div>
                </div>
                <div>
                    <div>
                        <div
                            dangerouslySetInnerHTML={{
                                __html: "<svg id='2819:23655' width='48' height='45' viewBox='0 0 48 45' fill='none' xmlns='http://www.w3.org/2000/svg' class='w-[48px] h-[45px]'> <circle cx='22' cy='22' r='17' fill='#91BA6E'></circle> <text fill='white' xml:space='preserve' style='white-space: pre' font-family='Inter' font-size='11' font-weight='600' letter-spacing='0em'><tspan x='17.2148' y='26'>11</tspan></text> <rect x='30' y='27' width='13' height='13' rx='3' fill='#7FAD57' stroke='white' stroke-width='2'></rect> </svg>",
                            }}
                        />
                    </div>
                </div>
                <div>
                    <div>
                        <div
                            dangerouslySetInnerHTML={{
                                __html: "<svg id='2819:23632' width='48' height='45' viewBox='0 0 48 45' fill='none' xmlns='http://www.w3.org/2000/svg' class='w-[48px] h-[45px]'> <circle cx='22' cy='22' r='17' fill='#91BA6E'></circle> <text fill='white' xml:space='preserve' style='white-space: pre' font-family='Inter' font-size='11' font-weight='600' letter-spacing='0em'><tspan x='16.4414' y='26'>12</tspan></text> <rect x='30' y='27' width='13' height='13' rx='3' fill='#7FAD57' stroke='white' stroke-width='2'></rect> </svg>",
                            }}
                        />
                    </div>
                </div>
                <div>
                    <div>
                        <div
                            dangerouslySetInnerHTML={{
                                __html: "<svg id='2819:23636' width='48' height='45' viewBox='0 0 48 45' fill='none' xmlns='http://www.w3.org/2000/svg' class='w-[48px] h-[45px]'> <circle cx='22' cy='22' r='17' fill='#91BA6E'></circle> <text fill='white' xml:space='preserve' style='white-space: pre' font-family='Inter' font-size='11' font-weight='600' letter-spacing='0em'><tspan x='16.2749' y='26'>13</tspan></text> <rect x='30' y='27' width='13' height='13' rx='3' fill='#7FAD57' stroke='white' stroke-width='2'></rect> </svg>",
                            }}
                        />
                    </div>
                </div>
                <div>
                    <div>
                        <div
                            dangerouslySetInnerHTML={{
                                __html: "<svg id='2819:23640' width='48' height='45' viewBox='0 0 48 45' fill='none' xmlns='http://www.w3.org/2000/svg' class='w-[48px] h-[45px]'> <circle cx='22' cy='22' r='17' fill='#91BA6E'></circle> <text fill='white' xml:space='preserve' style='white-space: pre' font-family='Inter' font-size='11' font-weight='600' letter-spacing='0em'><tspan x='16.1943' y='26'>14</tspan></text> <rect x='30' y='27' width='13' height='13' rx='3' fill='#D36A00' stroke='white' stroke-width='2'></rect> </svg>",
                            }}
                        />
                    </div>
                </div>
                <div>
                    <div>
                        <div
                            dangerouslySetInnerHTML={{
                                __html: "<svg id='2819:23644' width='48' height='45' viewBox='0 0 48 45' fill='none' xmlns='http://www.w3.org/2000/svg' class='w-[48px] h-[45px]'> <circle cx='22' cy='22' r='17' fill='#91BA6E'></circle> <text fill='white' xml:space='preserve' style='white-space: pre' font-family='Inter' font-size='11' font-weight='600' letter-spacing='0em'><tspan x='16.377' y='26'>15</tspan></text> <rect x='30' y='27' width='13' height='13' rx='3' fill='#D36A00' stroke='white' stroke-width='2'></rect> </svg>",
                            }}
                        />
                    </div>
                </div>
                <div>
                    <div>
                        <div
                            dangerouslySetInnerHTML={{
                                __html: "<svg id='2819:23648' width='48' height='45' viewBox='0 0 48 45' fill='none' xmlns='http://www.w3.org/2000/svg' class='w-[48px] h-[45px]'> <circle cx='22' cy='22' r='17' fill='#91BA6E'></circle> <text fill='white' xml:space='preserve' style='white-space: pre' font-family='Inter' font-size='11' font-weight='600' letter-spacing='0em'><tspan x='16.291' y='26'>16</tspan></text> <rect x='30' y='27' width='13' height='13' rx='3' fill='#7FAD57' stroke='white' stroke-width='2'></rect> </svg>",
                            }}
                        />
                    </div>
                </div>
                <div>
                    <div>
                        <div
                            dangerouslySetInnerHTML={{
                                __html: "<svg id='2819:23652' width='48' height='45' viewBox='0 0 48 45' fill='none' xmlns='http://www.w3.org/2000/svg' class='w-[48px] h-[45px]'> <circle cx='22' cy='22' r='17' fill='#CDCDCD'></circle> <text fill='#373737' xml:space='preserve' style='white-space: pre' font-family='Inter' font-size='11' font-weight='600' letter-spacing='0em'><tspan x='16.6294' y='26'>17</tspan></text> <rect x='31' y='28' width='11' height='11' rx='3' fill='#CDCDCD' stroke='white' stroke-width='2'></rect> </svg>",
                            }}
                        />
                    </div>
                </div>
                <div>
                    <div>
                        <div
                            dangerouslySetInnerHTML={{
                                __html: "<svg id='2819:23656' width='48' height='45' viewBox='0 0 48 45' fill='none' xmlns='http://www.w3.org/2000/svg' class='w-[48px] h-[45px]'> <circle cx='22' cy='22' r='17' fill='#CDCDCD'></circle> <text fill='#373737' xml:space='preserve' style='white-space: pre' font-family='Inter' font-size='11' font-weight='600' letter-spacing='0em'><tspan x='16.3071' y='26'>18</tspan></text> <rect x='31' y='28' width='11' height='11' rx='3' fill='#CDCDCD' stroke='white' stroke-width='2'></rect> </svg>",
                            }}
                        />
                    </div>
                </div>
                <div>
                    <div>
                        <div
                            dangerouslySetInnerHTML={{
                                __html: "<svg id='2819:23633' width='48' height='45' viewBox='0 0 48 45' fill='none' xmlns='http://www.w3.org/2000/svg' class='w-[48px] h-[45px]'> <circle cx='22' cy='22' r='17' fill='#CDCDCD'></circle> <text fill='#373737' xml:space='preserve' style='white-space: pre' font-family='Inter' font-size='11' font-weight='600' letter-spacing='0em'><tspan x='16.291' y='26'>19</tspan></text> <rect x='31' y='28' width='11' height='11' rx='3' fill='#CDCDCD' stroke='white' stroke-width='2'></rect> </svg>",
                            }}
                        />
                    </div>
                </div>
                <div>
                    <div>
                        <div
                            dangerouslySetInnerHTML={{
                                __html: "<svg id='2819:23637' width='48' height='45' viewBox='0 0 48 45' fill='none' xmlns='http://www.w3.org/2000/svg' class='w-[48px] h-[45px]'> <circle cx='22' cy='22' r='17' fill='#CDCDCD'></circle> <text fill='#373737' xml:space='preserve' style='white-space: pre' font-family='Inter' font-size='11' font-weight='600' letter-spacing='0em'><tspan x='15.4155' y='26'>20</tspan></text> <rect x='31' y='28' width='11' height='11' rx='3' fill='#CDCDCD' stroke='white' stroke-width='2'></rect> </svg>",
                            }}
                        />
                    </div>
                </div>
                <div>
                    <div>
                        <div
                            dangerouslySetInnerHTML={{
                                __html: "<svg id='2819:23641' width='48' height='45' viewBox='0 0 48 45' fill='none' xmlns='http://www.w3.org/2000/svg' class='w-[48px] h-[45px]'> <circle cx='22' cy='22' r='17' fill='#CDCDCD'></circle> <text fill='#373737' xml:space='preserve' style='white-space: pre' font-family='Inter' font-size='11' font-weight='600' letter-spacing='0em'><tspan x='16.4414' y='26'>21</tspan></text> <rect x='31' y='28' width='11' height='11' rx='3' fill='#CDCDCD' stroke='white' stroke-width='2'></rect> </svg>",
                            }}
                        />
                    </div>
                </div>
                <div>
                    <div>
                        <div
                            dangerouslySetInnerHTML={{
                                __html: "<svg id='2819:23645' width='48' height='45' viewBox='0 0 48 45' fill='none' xmlns='http://www.w3.org/2000/svg' class='w-[48px] h-[45px]'> <circle cx='22' cy='22' r='17' fill='#CDCDCD'></circle> <text fill='#373737' xml:space='preserve' style='white-space: pre' font-family='Inter' font-size='11' font-weight='600' letter-spacing='0em'><tspan x='15.668' y='26'>22</tspan></text> <rect x='31' y='28' width='11' height='11' rx='3' fill='#CDCDCD' stroke='white' stroke-width='2'></rect> </svg>",
                            }}
                        />
                    </div>
                </div>
                <div>
                    <div>
                        <div
                            dangerouslySetInnerHTML={{
                                __html: "<svg id='2819:23649' width='48' height='45' viewBox='0 0 48 45' fill='none' xmlns='http://www.w3.org/2000/svg' class='w-[48px] h-[45px]'> <circle cx='22' cy='22' r='17' fill='#CDCDCD'></circle> <text fill='#373737' xml:space='preserve' style='white-space: pre' font-family='Inter' font-size='11' font-weight='600' letter-spacing='0em'><tspan x='15.5015' y='26'>23</tspan></text> <rect x='31' y='28' width='11' height='11' rx='3' fill='#CDCDCD' stroke='white' stroke-width='2'></rect> </svg>",
                            }}
                        />
                    </div>
                </div>
                <div>
                    <div>
                        <div
                            dangerouslySetInnerHTML={{
                                __html: "<svg id='2819:23653' width='48' height='45' viewBox='0 0 48 45' fill='none' xmlns='http://www.w3.org/2000/svg' class='w-[48px] h-[45px]'> <circle cx='22' cy='22' r='17' fill='#91BA6E'></circle> <text fill='white' xml:space='preserve' style='white-space: pre' font-family='Inter' font-size='11' font-weight='600' letter-spacing='0em'><tspan x='15.5068' y='26'>24</tspan></text> <rect x='30' y='27' width='13' height='13' rx='3' fill='#7FAD57' stroke='white' stroke-width='2'></rect> </svg>",
                            }}
                        />
                    </div>
                </div>
                <div>
                    <div>
                        <div
                            dangerouslySetInnerHTML={{
                                __html: "<svg id='2819:23657' width='48' height='45' viewBox='0 0 48 45' fill='none' xmlns='http://www.w3.org/2000/svg' class='w-[48px] h-[45px]'> <circle cx='22' cy='22' r='17' fill='#91BA6E'></circle> <text fill='white' xml:space='preserve' style='white-space: pre' font-family='Inter' font-size='11' font-weight='600' letter-spacing='0em'><tspan x='15.6035' y='26'>25</tspan></text> <rect x='30' y='27' width='13' height='13' rx='3' fill='#7FAD57' stroke='white' stroke-width='2'></rect> </svg>",
                            }}
                        />
                    </div>
                </div>
                <div>
                    <div>
                        <div
                            dangerouslySetInnerHTML={{
                                __html: "<svg id='2819:23634' width='48' height='45' viewBox='0 0 48 45' fill='none' xmlns='http://www.w3.org/2000/svg' class='w-[48px] h-[45px]'> <circle cx='22' cy='22' r='17' fill='#E4E4E4'></circle> <text fill='#939393' xml:space='preserve' style='white-space: pre' font-family='Inter' font-size='11' font-weight='600' letter-spacing='0em'><tspan x='15.5176' y='26'>26</tspan></text> </svg>",
                            }}
                        />
                    </div>
                </div>
                <div>
                    <div>
                        <div
                            dangerouslySetInnerHTML={{
                                __html: "<svg id='2819:23638' width='48' height='45' viewBox='0 0 48 45' fill='none' xmlns='http://www.w3.org/2000/svg' class='w-[48px] h-[45px]'> <circle cx='22' cy='22' r='17' fill='#CDCDCD'></circle> <text fill='#373737' xml:space='preserve' style='white-space: pre' font-family='Inter' font-size='11' font-weight='600' letter-spacing='0em'><tspan x='15.856' y='26'>27</tspan></text> </svg>",
                            }}
                        />
                    </div>
                </div>
                <div>
                    <div>
                        <div
                            dangerouslySetInnerHTML={{
                                __html: "<svg id='2819:23642' width='48' height='45' viewBox='0 0 48 45' fill='none' xmlns='http://www.w3.org/2000/svg' class='w-[48px] h-[45px]'> <circle cx='22' cy='22' r='17' fill='#CDCDCD'></circle> <text fill='#373737' xml:space='preserve' style='white-space: pre' font-family='Inter' font-size='11' font-weight='600' letter-spacing='0em'><tspan x='15.5337' y='26'>28</tspan></text> </svg>",
                            }}
                        />
                    </div>
                </div>
                <div>
                    <div>
                        <div
                            dangerouslySetInnerHTML={{
                                __html: "<svg id='2819:23646' width='48' height='45' viewBox='0 0 48 45' fill='none' xmlns='http://www.w3.org/2000/svg' class='w-[48px] h-[45px]'> <circle cx='22' cy='22' r='17' fill='#E4E4E4'></circle> <text fill='#939393' xml:space='preserve' style='white-space: pre' font-family='Inter' font-size='11' font-weight='600' letter-spacing='0em'><tspan x='15.5176' y='26'>29</tspan></text> </svg>",
                            }}
                        />
                    </div>
                </div>
                <div>
                    <div>
                        <div
                            dangerouslySetInnerHTML={{
                                __html: "<svg id='2819:23650' width='48' height='45' viewBox='0 0 48 45' fill='none' xmlns='http://www.w3.org/2000/svg' class='w-[48px] h-[45px]'> <circle cx='22' cy='22' r='17' fill='#E4E4E4'></circle> <text fill='#939393' xml:space='preserve' style='white-space: pre' font-family='Inter' font-size='11' font-weight='600' letter-spacing='0em'><tspan x='15.249' y='26'>30</tspan></text> </svg>",
                            }}
                        />
                    </div>
                </div>
                <div>
                    <div>
                        <div
                            dangerouslySetInnerHTML={{
                                __html: "<svg id='2819:23654' width='48' height='45' viewBox='0 0 48 45' fill='none' xmlns='http://www.w3.org/2000/svg' class='w-[48px] h-[45px]'> <circle cx='22' cy='22' r='17' fill='#E4E4E4'></circle> <text fill='#939393' xml:space='preserve' style='white-space: pre' font-family='Inter' font-size='11' font-weight='600' letter-spacing='0em'><tspan x='16.2749' y='26'>31</tspan></text> </svg>",
                            }}
                        />
                    </div>
                </div>
            </div>
            <div className={styles.legendContainer} role="complementary" aria-label="Calendar Legend">
                <div className={styles.legendItem}>
                    <div className={styles.usageIndicator} role="img" aria-label="Usage Indicator" />
                    <span className={styles.usageLabel}>Utilisation</span>
                </div>
                <div className={styles.legendItem}>
                    <div className={styles.leakIndicator} role="img" aria-label="Leak Indicator" />
                    <span className={styles.leakLabel}>Fuites</span>
                </div>
            </div>
        </section>
    );
}

export default InputDesign;
