<div align="center">
    <h1>react-material-pagination-v4z</h1>
    <br />
    <a href="https://codesandbox.io/s/wrqy50">LIVE EXAMPLE</a>
</div>

---

#### Description

+ React material(v.4) pagination  (>= 4.11.3)

---

#### Usage
```js
npm install react-material-pagination-v4z --save
```

Import the module in the place you want to use:
```js

import Pagination from 'react-material-pagination-v4z'
```

#### Snippet

##### `simple`

```js
    const [page, setPage] = React.useState(1)

    <Pagination
        // className
        totalCount={100}
        // limit={10}
        // labelFirst="|<<"
        // labelLast="Last"
        // sectionNumber={5} // display number of page
        currentPage={page}
        setCurrentPage={setPage}
        // showFirstLast // ={true}
		// showForwardBack // ={false}
    />

    <Pagination
        // className
        totalCount={100}
        // limit={10}
        // labelFirst = "|<<",
        // labelLast = ">>|",
        // labelBack = "<",
        // labelForward = ">",
        currentPage={page}
        setCurrentPage={setPage}
        type="pager"
    />

```

<br />


---

#### props


<br />

#### RUN

<a href="https://codesandbox.io/s/wrqy50">LIVE EXAMPLE</a>

```js
npm install
```
```js
npm run dev
npm run start
```

### License

MIT
