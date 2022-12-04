# React Hook 사용하기

## useState
https://ko.reactjs.org/docs/hooks-reference.html#usestate

## useEffect
https://ko.reactjs.org/docs/hooks-reference.html#useeffect

### useMemo와 useCallback을 배우기 전에 알아야 하는 것
- 함수형 컴포넌트는 그냥 함수다. 다시 한 번 강조하자면 함수형 컴포넌트는 단지 jsx를 반환하는 함수이다.

- 컴포넌트가 렌더링 된다는 것은 누군가가 그 함수(컴포넌트)를 호출하여서 실행되는 것을 말한다. 함수가 실행될 때마다 내부에 선언되어 있던 표현식(변수, 또다른 함수 등)도 매번 다시 선언되어 사용된다.

- 컴포넌트는 자신의 state가 변경되거나, 부모에게서 받는 props가 변경되었을 때마다 리렌더링 된다. (심지어 하위 컴포넌트에 최적화 설정을 해주지 않으면 부모에게서 받는 props가 변경되지 않았더라도 리렌더링 되는게 기본이다. )
## useMemo
- https://ko.reactjs.org/docs/hooks-reference.html#usememo
- 메모리제이션(동일한 계산을 반복해야 할 때, 이전에 계산한 값을 메모리에 저장함으로써 동일한 계산의 반복 수행을 제거하여 프로그램 실행 속도를 빠르게 하는 기술)된 값을 반환
-  useMemo를 사용하지 않고도 동작할 수 있도록 코드를 작성하고 그것을 추가하여 성능을 최적화하는게 더 좋긴 함

## useCallback
https://ko.reactjs.org/docs/hooks-reference.html#usecallback

6. useMemo useCallback
### useMemo 
- color값만 바꾸어도 getColorKor, getMovieGenreKor 두 함수가 모두 실행되고 movie 값만 바꾸어도 마찬가지로 두 함수가 모두 실행
- 의존성 배열에 넘겨준 값이 변경되었을 때만 메모리제이션된 값을 다시 계산하도록 한다.
- color값이 바뀔 때는 getColorKor함수만, movie값이 바뀔 때는 getMovieGenreKor함수만 호출되는 것을 확인

### useCallback
- 메모리제이션된 함수를 반환한다라는 문장이 핵심
컴포넌트가 렌더링 될 때마다 내부에 선언되어 있던 표현식(변수, 또다른 함수 등)도 매번 다시 선언되어 사용
onChangeHandler 함수는 내부의 color, movie 상태값이 변경될 때마다 재선언된다는 것을 의미
- onChangeHandler 함수는 파라미터로 전달받은 이벤트 객체(e)의 target.id 값에 따라 setState를 실행해주기만 하면 되기 때문에, 첫 마운트 될 때 한 번만 선언하고 재사용
- 하위 컴포넌트가 React.memo() 같은 것으로 최적화 되어 있고 그 하위 컴포넌트에게 callback 함수를 props로 넘길 때, 상위 컴포넌트에서 useCallback 으로 함수를 선언하는 것이 유용
- React.memo()로 함수형 컴포넌트 자체를 감싸면 넘겨 받는 props가 변경되지 않았을 때는 상위 컴포넌트가 메모리제이션된 함수형 컴포넌트(이전에 렌더링된 결과)를 사용하게 된다.

- 함수는 오로지 자기 자신만이 동일하기 때문에 상위 컴포넌트에서 callback 함수를 (같은 함수이더라도) 재선언한다면 props로 callback 함수를 넘겨 받는 하위 컴포넌트 입장에서는 props가 변경 되었다고 인식