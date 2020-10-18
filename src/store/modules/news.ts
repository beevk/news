type Nullable<T> = T | undefined | null;

interface News {
    source: {
        id: Nullable<string>;
        name: Nullable<string>;
      };
      author: Nullable<string>;
      title: string;
      description: Nullable<string>;
      url: string;
      urlToImage: Nullable<string>;
      publishedAt: Nullable<string>;
      content: Nullable<string>;
}

interface State {
    news: News[];
}

const state: State = {
  news: [
    {
      source: {
        id: null,
        name: 'ESPN',
      },
      author: 'Alex Scarborough',
      title: '"Our confidence went through the roof": Nick Saban returns and Bama keeps rolling - ESPN',
      description: "Alabama coach Nick Saban passed the COVID-19 test -- three straight negative results -- and inspired the Crimson Tide in Saturday night's win over Georgia.",
      url: 'https://www.espn.com/college-football/story/_/id/30134720/nick-saban-returns-bama-keeps-rolling',
      urlToImage: 'https://a1.espncdn.com/combiner/i?img=%2Fphoto%2F2020%2F1018%2Fr762370_1296x729_16%2D9.jpg',
      publishedAt: '2020-10-18T05:52:30Z',
      content: "TUSCALOOSA, Ala. -- We should've known all along that Nick Saban wasn't going to miss a day's work. He has always appeared more machine than man during his time in the public eye -- a creature of rou… [+4678 chars]",
    },
    {
      source: {
        id: null,
        name: 'MMA Fighting',
      },
      author: 'MMA Fighting Newswire',
      title: 'Pros react to Teofimo Lopez vs. Vasiliy Lomachenko showdown - MMA Fighting',
      description: 'The eyes of the MMA world were locked onto Saturday’s lightweight championship showdown between Teofimo Lopez and Vasyl Lomachenko.',
      url: 'https://www.mmafighting.com/2020/10/18/21521421/pros-react-to-teofimo-lopez-vs-vasiliy-lomachenko-showdown',
      urlToImage: 'https://cdn.vox-cdn.com/thumbor/XJkA5K7Hl8TSmXaXhN0mQdxe3Uk=/0x0:3000x1571/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/21969749/1280838899.jpg.jpg',
      publishedAt: '2020-10-18T05:16:08Z',
      content: 'Saturdays highly-anticipated boxing match between Teofimo Lopez and Vasiliy Lomachenko captured the attention of the MMA world.\r\nLopez won a unanimous decision (116-112, 119-109, 117-111) over Lomach… [+2012 chars]',
    },
    {
      source: {
        id: null,
        name: 'Deadline',
      },
      author: 'Alexandra Del Rosario',
      title: '‘SNL’: Michael Che Jokes About NBC Trump Town Hall On Weekend Update: “What Can We Say We Have A Type” - Deadline',
      description: 'Saturday Night Live took on the competing ABC Joe Biden and NBC Donald Trump town halls during its latest episode.  The show kicked off with a cold opening that saw Alex Baldwin reprise his role as 45 and Jim Carrey transform into the Democratic presidential …',
      url: 'https://deadline.com/2020/10/snl-weekend-update-michael-che-nbc-trump-town-hall-1234599328/',
      urlToImage: 'https://deadline.com/wp-content/uploads/2020/10/Screen-Shot-2020-10-17-at-9.19.43-PM.png?w=1000',
      publishedAt: '2020-10-18T04:52:00Z',
      content: 'Saturday Night Live took on the competing ABC Joe Biden and NBC Donald Trump town halls during its latest episode.  The show kicked off with a cold opening that saw Alex Baldwin reprise his role as 4… [+1416 chars]',
    },
    {
      source: {
        id: 'cnn',
        name: 'CNN',
      },
      author: 'Frank Pallotta, CNN Business',
      title: "'SNL' takes on the dueling town halls between Trump and Biden - CNN",
      description: 'Instead of a presidential debate, this week had dueling town halls between President Donald Trump and former Vice President Joe Biden. "Saturday Night Live" covered both, like many viewers, by flipping back and forth between the two.',
      url: 'https://www.cnn.com/2020/10/18/media/snl-biden-trump-town-halls/index.html',
      urlToImage: 'https://cdn.cnn.com/cnnnext/dam/assets/201017234919-saturday-night-live-cold-open-super-tease.jpg',
      publishedAt: '2020-10-18T04:22:00Z',
      content: 'New York (CNN Business)Instead of a presidential debate, this week had dueling town halls between President Donald Trump and former Vice President Joe Biden. "Saturday Night Live" covered both, like … [+2381 chars]',
    },
    {
      source: {
        id: null,
        name: 'SciTechDaily',
      },
      author: null,
      title: 'Next COVID-19 Drug Target: Viral “Molecular Scissor” - SciTechDaily',
      description: 'Coronavirus uses enzymatic cutter for virus production and to disable essential immune proteins. American and Polish scientists, reporting October 16, 2020, in the journal Science Advances, laid out a novel rationale for COVID-19 drug design — blocking a mole…',
      url: 'https://scitechdaily.com/next-covid-19-drug-target-viral-molecular-scissor/',
      urlToImage: 'https://scitechdaily.com/images/Disabling-Viral-Molecular-Scissor-scaled.jpg',
      publishedAt: '2020-10-18T04:18:12Z',
      content: 'The SARS-CoV-2-PLpro enzyme is visualized with an inset of viral inhibitor interaction. Blocking the enzyme’s effects may prove fruitful in stopping coronavirus infections. Credit: Image courtesy Sha… [+3862 chars]',
    },
  ],
};

const getters = {
  allNews: (currentState: State): News[] => currentState.news,
};

const actions = {};

const mutations = {};

export default {
  state,
  getters,
  actions,
  mutations,
};
