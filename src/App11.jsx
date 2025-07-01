function MyComp1({ children, color }) {
  return (
    <ul>
      <li>color: {color}</li>
      <li>children: {children}</li>
    </ul>
  );
}

function App11() {
  // - 직접 구현한 컴포넌트 : 대문자로 시작
  // - html 컴포넌트(built-in component, 브라우저 컴포넌트) : 소문자로 시작 (h1, p, div, ...)
  // 브라우저 컴포넌트 props : html attribute를 사용
  // - HTML 키워드 => Javascript 키워드 : for => htmlFor, class => className

  // style prop : = style attribute
  // - Javascript 키워드 : 객체 타입 형식으로 작성 , (kebab-case => CamelCase)
  /*
  ** style attribute **
  <div style="color: red; background-color: yellow; font-size: 24px;"></div>
   */
  /*
  ** style attribute **
  <div style={{color: "red", backgroundColor: "yellow", fontSize: "24px"}}> </div>
   */

  return (
    <>
      <MyComp1 color="red">작성된 컨텐츠</MyComp1>
      <h1>제목</h1>
      <p>문단</p>
      <div>div</div>
      <a href="https://www.daum.net">daum</a>
      <img
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAQlBMVEX///9h2vtY2Pv6/v9R1/tw3fyu6vz2/f+U5Py37P3r+v7Z9P3v+//g9/7k+P5q3PuD4fzR8/7J8f2g5/2/7v2o6P2CQ9WpAAATSElEQVR4nO1d16KsrA5eggUr1vd/1SMlNGmzlsN/LnYudplRhwApJF/iz8/v6aqrJyHadzk3T22FPHfX/R8G9HvCq4+Xm2p6Tqmbp74K3X2VGLxD+AiMhk3vOuLYvd3W1J5lkdz8B2vTq9EgVFHxl2YHtUv41vmorWvv/1Dxl/hgK8eFoFGNhZK2P8++JavJT73uAdHpzsZYU1Q15BL3U7i7Se7Sd6kj8pfRusuf7ub9MnYPqq7Bd+d8aMFHNT32Ud4/bQQ+Lyw2O5XDOcwRd/O5GjtoHT03rsbq0XY0l2+6xHeomb89fpO6Q/4scXfEYGwi1OzOt7ilxtK1s6MmsHxs1X5z8C6NDRKj9cz9cBmiY48KE2NZiMvKTYtYN7R6d+iXCFTZ4f12NBaHGJ93jaEBz9iDqbukX6RJznAT0r+HGnVN1fwvhnZ4bE948iruKqgCZjnFJHjFRhU3ldwyu16uKmwXL8lsuX22yVH5twqnQWktRJluwqdeliZiFbcqKIxfolNMMo1Y+VszKXtyD77rleTHpbtrxEXFhKZrBTNN9Crcg7zfKrrVW+yKO9VSaCKL/i5NUr7X+GV4V9pLSVD6gCB0S91GPdUXaRA/iPyK2aDRMPdyjc7UYaeXz846FL1AYNrSvvpic4PonpzwHUV19+s05wvp0lgrk+Hcj4V9AGAm59zRmdzk+I+zZCamKd+kWcgzyrIFs7KVeRpqkV7f/yMziykyOUv5XzGTMbbBlpkM9oszky0zw2qr5gwvZS7MzCJPM0ltNhHXzqTleiysAHLtTHcp+wIHzLT92Aqr5kwPAPeKl/NU3KRMe2mjCbsnfJzhBAeFquox7o3/RO9q5USVYqbLcjQH5TTzFdSHz7jeEPEmlPCt3yOccwTA4JbVkmcVmkbRccojQDGvGU7ANLYVCIxdsQwmB9HYs8VV5c4zUkijNvBUXoya4g4+qSPCNgmDXJcLz4xyksPTNysJMRje4MPIvEMMu1zwHAxNUDdPaktZw+59LNoktF7JAG2X0M06rH5ZcqzCr9UaErdD3Fcw1CSNQbUGVI6ylq6F7BQ3V+DWVd5YTJnd4i0Vld+B2pSrTK7DoktlLahfbKRxyjiRv0cyYGmHhHE372d7EWK4/cgh/U1DyNXv44TTD/4yzdIiwgR243mRtWn4UILZSps4Z7RZydFuC2zHUzyhYEBTSTiP8c8taaiV0fwF0fU4mQKT8l80pfHTwl5p6jqYdf6M2INIkxmRe5VOeXL+23o8SD4voB2+Qt0wEpoY1kP0/WrAT7SfyqjmbtmOCCQBWKFNs3IiJvFPbj2RZGc1lMK3CPP0uJ8VNuU6QL6P8zJMU2fOMMZdNw3LPO7qATdf3qVCNVqvffni+kz7tVYeThC6ZffWsdcJzledkGCAEKFr79tjbW7pf3CEarY+X1qeoSfUN4eoWo9238ZlUsdJ1CRU6yTtFFo7LoLbfuv358MRakj/BS29HKvXGtKLsSG3A/j46YjaaB2pb8LTMp6NZ66q9XrZg57axmUFrIs5bjnfdTq5Aidv6zAwOo+G5aHkzSBa76ifW0aohIaYh3VpSbMOI4vaaPozeTpFHh3zWrBma+ypuhVNPylnXXsecP6ssrzEHR6nHGQQpJVh6xrbsUDolQjHQJxZaqRIynms1T455O/mZfAU/EYFYuVRW4Lnht6OudfN9ld28OaCw9TYu9reZxLoFM3ymyTxNxWS+BoQo1ot9WZpuHtx/qbYptZ8GuXbS5EMBEiom0IxZCOSlIiJ+ekAXGRcslymDq19mK9sGkhtsEIcbN9u7TM4Kj+992ket22cHyIM+Y5aRC9H+TjbyZxOYoDtqnSCN0SzxsciRHZ3NB1gzth/VF7ZcXi7rSUrvWklD3N+ghTy6ZAA1tqVuJsdJbX3VvulS2Bk8ev1wcoP4A8qNLEND5zZP7YdVPhe3HM7bHGCIA5XGV0lcxnP3xlOqmf1dwCBWUN5qt5rtYyNMQPM0TIxU0ttTC29rDlRocJNK0ev+pg1IO9X3OisVxClDGC45gdLz9EOvA7EdRtQZQfECNzW/chnBeLX3abt9ueYR9g3zDkJWV+lTOdJboPa5PqRBBT70HwahvvGwVH0D1pAgFGeUTZJZYpQZCIgL77Cwpjhrs4PSbcdt15eswLjYU9IBRDR+qHnqbFvseO4fr74y8pV7IFAhx3gh+OcX3/YBCnS+sNMlBpJfINuKDjMKRQ/Q5W50WyWEwnsA677KEegDk+JE+Ngopb4SUtRH1gYdzPaT4j7+jj/jGGQ1JmIJm7CvTkUa77CQQs7c2YuLkokb0FIURRQ+Rij17Xw0GhAlS09tURCg7U5FEPnZURlYWAfKDSVX0leiS89sdYPnDFmrDlSB5ucRAaWT/gg5QEObCLRz0ilLxwYAokxYz1XL01O7F8GuZt8oZl8M+gntYiOKXPRmSY5/hcsTVwvS4IVzz9GAzM5GrCXZzLH9V+fPGiymQGVSHMyTNuvmckRM7Cb1Ob8A2Y2VYuT8XP7x8xIYGUqLslHokEl1iYJlQry51oyo92InBST9JE+kJl8bfbTatmwlqaNMWO5FRovFHMDgeSVaz4zOFud60OPszRzjBnTUdQJ6BwPUopMHUpW+whii8nVPE2lZe4SHOYFVeZIRvOblPoEYPFH1Y/Zvpl5ZEHEHGR4n1m7DNtPSMg1HM5TgXmbVAYlri4dr9mcryGUIEOVOZLN5jk+41CD+CGAS5nlaHrROX/ZxjDkNtvlvk6xQPSkAt7Gx8iaHbxeGvFkFzlTFCJg5sROfo+mtrYSLEwjn0Aj+0cN6WP8huFBBg8PSum1Mk5jHzVnT7rF1Viwb3Z/CND6MfWIz8Gok440hSAGcLCqO/Uvy1J4uHF2iNQSaJ1+jFSa97eUovgVfMMogUOnd6tJW8JAmLBdkDVpt+TZIuHMywQp0F2fVLzHLrypDNQvgjN8rHpi68aXyIaA6qYVhntqYJk9HfRonE0ENzH0mWTMV6GJByNOHI2wRMioS0L1MbvsQNCrYcumnBJHuXY9EfAg2hC3gYN9D+gLdxPgpTWqVX8P3rh3ml6c6hr9WQAuJ8oreR5Klv3s+3N/7J9Ogs+kH7TpdTYvmlsjQ4T+gt3qzK4diB77Mz8DnpaKBmRPnVRPINCT53jbbZepROr1TzhUvFuhoIr0ShthW/9gyB3l1leAjwrZSgj2Il0MbSMPUHX8Neu8XJXFzgrLszmWYXAGl6AOOhko5iU2QO6zaXeQB3UTamTxAXWbddBCiN78YKWKdHTYzh2lSJVyK3MuZ4PtM7wdqw0HQejPyyLZOV2cwe1+yDCEaY5haXIs9PDEAYBDUe1PAFiq+csnhHvkOlpgPQz1MsMvp1WOGrgZ9h+p9WiDld8ZyjC5KA1JdMd6yhRYKbkjFrD92kbiafdHQf5gW8LEfsuD1OHAMIkskz56nYqAqXB5wxDE3TRt/Uq9YM9b43wJ4zgeqweWiRhUdD36fRwgEJQKH8Imq/tl6++H1l5A3q1rGvLFCofh9PJTcQAdonqfzAwG2HWO1N6rcC/DoGs4GPg2BCysGuJPDL9I8xmAnllDaQg5jutqW9b7SFB//+e6joMQ30HH5eReak8vl/cJL9uRGI0Bnq0f/0jDZ9fjHP9uIXPpBC2aHNdHlHFU/wLJXCllOiiJC84jrkbkHBVtcaZqAW5p3lqujf7AElOHdXOcywTPLVk+ozxeGSPE09gTvkifFQbwG7ivN0rTK1zvsoUNkB+ytwPmRqMJD95eDwZ0OsfJ8+BsAN4rJEPM1P+bpxpwszYWGZz6zeqcrDN8nSCoFgr5qmrzhyCrVHugs5T0c3KSG28RxGJCxc0q5uaG9SFpgILVgLK0uVjbGR22CeYIIE+B7I2ocFY0GCw+pJospwEAwRw2B2oJzILBpfEcghwqX3QKAa+IzoH8ANK1nLoOPdKKLePRLxNUnUf2gmqZp0NHEDSoYwnJoXShNpx5m5idVk3zQDNBKtdONj2eLRPdxRyaTh6P450adE6MqzRlfBK9d6C5QSl1ltd2wkid7QbcJ9XgBYqbSzEDZiaRvTXRCip4m0RZQ9l5qYYgQ6aZVrlo1Gh1kBqk7G5SzNWE3gZJB0rlRJCy/MlD/Yke9umrBO2N0rZgdFzojMitzMYXs5r5zBjNQblhyrlDOuSlmckJkO8mMzmW8P+ZGQO4nGfVizOzZm8z7cTkQT7Lywyo5pyZtmLhCSvLaS/MjDSaGaiPzoHGZGDe+sKqWZr2NKZycTG0GbbwKGw0wdFMycCjW2sO2E+em4u5MwAujncF/tF9dCtCNDcJtSGPAMX6m4GQxg5n96FHp9qOaVKRdkT9QBxJcDgrF6AFLyWiziaj5K2ddM9/5qe1kS0Eed9yXXSGVHTGFBckOjR3CrSJEAkLjlzBgl10IAgYjH7pNgUIQdEr1oUbyIU3KZLd54t20dqjqYdFift94DdT43rnVYHRQmVByVc2xN6sgE8t+bV9wUwTi6NqHEo2nlKdP55SsxkJy0dtmAlCrT0mJ/iKjq+SLua39Gw3rnGgGzYwX+wFQp39JXxX+OVAYDfQAYBHPC3WC1u8b2yx39lys3Oq1ih40VWlRZtoGc3LEb32cZ7HvSfUYMWtyTbuPExAXk1Jv7H7NwPxVzA7I0gH9W4WKLUT4qx9QPBOfDb2tQhRyh8jP8g697xL7cOL1MNr+qgEz1cEFVF8kzHCoTqMmrYp17jbHtX1en+WOsnYI+p9kIYnytZL07Z6k+112fc1GTS6A6pr2uf2JWPsPBB5dUk/xqFuX1Xqn8GayEeNbvAtOyY/6IVGOX8jBtpiDtV6nL/Z7AyDLQmRkg0nv0Wsv9lWEMX0j/7RP/pH/+gf/aMwtdTMrjIXija3z1KoX+/L5Dt8MZwrea+SpRy1T17EGqHQ6f6LNN30F+dNonI9mPfCYa0fhqM+DvL75oaSGYV6ZaSqwEpCKDl1NUKfdZtyiDGDznlkxP/ctl1VTRYNn4rGkH96vw5nxjkudbOIr5aOoHBm/rwyj7OfbM6Q1SzoPfoSMz+Y77SCOUdG32JGdgEo+3L1r8gMI8yTW74mBJhT5JE4ecUP7phFca+RzCTvDlKQGY4CcIVGVJ00zOF5NA4QNLFiNf6igH4b/Jd0c79WohKvV413h2UZeNmzeNHA72xciBmBAnCKF+e+QbwbPuuqTzwN8Id9ZaPktWeshMnTy7bbiIqes/cCiKeYHRbYzdWvorcfMMO6eFtx/cOJsXb76nbTeGScByeafltJNu7RKR38rBlQihm5zcyaZtmDWBT8cYmyq3lYQ13lGkm23SzgIi0Y+15ewy8ZG3iouD8K8f6cGb7uRiesUZTY15Qc7cXKYdmN1LhzOsQGXA9Ws9kSUcNuq1pRpcJzT+d+tqISlOFTFy5o7AYqZOZVZkS7G929V2xqVLXj0N26aBj5Mpi9ofiLmOp1FyF1PM0CSGSB7zjqC9FWyD0eNvZUVI33P28FwPJ0aB3vfy7Dr9RZiBlhNNW0yjZYRr0+5vAMI/+FT2R3W+84GN1sH8U/QGbRP39tt4qjN3/01QPMyK2tvhDlpzZWg7951sjlTwTZ/jsH1RnlTfwGF/S8Glv5K8x0Uj7Uwoi97jZ1G/nS6PEvrj5lMFSDGf5bD7yMMfhXmNlYnbiw2103jaC2dHqLo5DQI9vFACex+sQBmS6RmJEYxOQNZmzND1WyRisb/oI8T3qYOXAxAAzfV4oZDsWJotdeYcZHJvKCq7Lak4ak1aNj6a3phkGe5Dl6STHDfyoKrf0KMyxnbzZP4DC62nP3zaSFx+zmvb19t3W9Tqay+MZSzJDULntpm9nRDBY5s7wqLjK+N5eyvLoB/Z/5a1iEB9Bco6j0BmY4Z/Gaj1cUALwMC/rbuO+44n4aPfsH8ckG0VJNkpiTydg5LWb4Xo2D8V9hZmf7nJGA8T2ENNaWWTMjuvmxF2S1PfNmUEVMmeE17PH2Li/bGX72r4njTMSYUT3iBuk0zLe/czs8Sy9fyWUzEx3qy8wMYnbdYmURgw6QkBmBS6l12ygsMXT2Nos6kG97AKJ2BNlLw5iJveyXEW+QV1ttMcQxwlYA0XjP28yIIFNtw8w5XDuBPGcFm26D1ckymtzyfl01WypGNB6wN5qwM3GvnHnEbhEpXwxa1mja+lLi5cw55nDXRDMjtqKuFbFXhlem0Zhufp8ZUTdjeylXep8xaXfh8LYHIMpsXE1p0heOALIGwJxl3tw2br2ZsLvvYuDaWgcSeReAB9jW+PFvnGeEi2Pi20SnmCfibdG/zDSeOxL7CCDfwO3AbXfjDPENZjoeWbBCEXy/P7IC26rh2+JNFLbm7WuLGVk2Z9XW3G6DXqvmeRD9MzPQSMGUgBY9ZnVqG6S3njgjW9BLUVhixqsvEdO5YFI4YBgptDbfzPxX8a8izv4YwAEhIE1EjEOdDCb+IjzjFMzNrQH+n2XhgxV8l7GFhpzjPJ7iRdZIVWuKw/k5TPv6KzR6IKDBh2FnNCB8V63X7S7Ll1UaZQJQcEevbZ5Fz1LUuMxgKBMwjhx6Nc9afRV6wfpN/wOtbr9fRkaNmgAAAABJRU5ErkJggg=="
        alt="React Logo"
        title="React Logo"
      />
      <br />
      <label htmlFor="nameInput">이름</label>
      <input type="text" name="" id="nameInput" />
      <hr />
      <div className="content">hello</div>
      <hr />
      <div
        style={{ color: "red", backgroundColor: "yellow", fontSize: "24px" }}
      >
        스타일 props 사용
      </div>
      <hr />
      <button
        style={{
          color: "skyblue",
          backgroundColor: "black",
          padding: "10px",
          borderRadius: "5px",
          fontSize: "2em",
        }}
      >
        버튼
      </button>
    </>
  );
}

const myAddress = "jeju";
// eslint-disable-next-line react-refresh/only-export-components
export { myAddress };

export default App11;
