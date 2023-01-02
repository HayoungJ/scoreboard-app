# scoreboard-app

## Idea

회사에서 탁구 점수 세는 것이 헷갈리는 김에, 전부터 궁금했던 React-Native의 튜토리얼 삼아 탁구 점수를 셀 수 있는 Scoreboard를 만들어보았다.<br/>
비록 맥 기종 버전 상 ios 16을 위한 빌드를 할 수 없어 실제 앱에서 구동해보지는 못 했지만(🤣) 올해 중에 맥북을 새로 살 계획이 있으니 그 때 재도전 해보는 것으로..! <br/>

## Screen 

![Simulator Screen Shot - iPhone SE (2nd generation) - 2023-01-02 at 22 23 03](https://user-images.githubusercontent.com/59152882/210237197-3642742f-a4e8-44c4-bb91-9cd07f2bc8fa.png)

1. 점수 (연분홍/하늘): single-tap 시 점수가 1점 증가하고, double-tap 시 1점 감소한다. 0점일 때는 double-tap이 동작하지 않는다.
2. 세트 점수 (빨강/파랑)
3. 세트 종료: 선택 시 현재까지의 점수를 비교해, 이긴 쪽의 세트 점수를 1점 증가 시킨 뒤 좌우를 바꾼다. (탁구에서는 세트가 끝날 때마다 위치를 바꾸기 때문!)
4. 경기 종료: 현재까지의 점수와 세트 점수를 모두 0점으로 초기화한다.

## 후기

> React와 React-Native가 얼마나 비슷한지 궁금했었는데, 비슷하면서도 세세한 부분에서 차이가 좀 있어서 헤맨 부분이 있었다.<br/>
> 특히 CSS Style에서 flex property key 이름이 달라 ?!?!?와 같은 기분으로 구글의 힘을 빌려야했다😫<br/>
> 그렇지만 전체적으로 구성이 비슷하고, 특히 (비록 단순한 내용 밖에 작성하지 않았지만) 로직을 작성하는 부분이 React와 동일해, 오 할 만 한 걸? 하는 마음으로 접근할 수 있는 점은 좋았던 것 같다.

## 기타 

프로젝트 앱 아이콘은 <a href="https://www.flaticon.com/kr/free-icons/" title="탁구 아이콘">탁구 아이콘  제작자: Freepik - Flaticon</a>를 사용하였다.
