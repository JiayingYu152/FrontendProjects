import "./fetchJobBoard.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PAGE_SIZE = 6;

function JobPosting({ url, by, time, title }) {
  return (
    <div className="fetch-job-board-post" role="listitem">
      <h2 className="fetch-job-board-post__title">
        {url ? ( //是否有url，有url就需要展示url
          <a
            className="post__title__link"
            href={url}
            target="_blank" //在新标签页打开链接。如果没有这个属性，点击链接会在当前标签页打开
            rel="noopener" //安全属性，防止新标签页获取对原页面的引用。如果没有这个属性，新标签页可以通过window.opener获取原页面的引用
          >
            {title}
          </a>
        ) : (
          title //没有url直接展示title
        )}
      </h2>

      <p className="fetch-job-board-post__metadata">
        By {by} &middot; {new Date(time * 1000).toLocaleString()}
      </p>
    </div>
  );
}

const FetchJobBoard = () => {
  const [fetchingJobDetails, setFetchingJobDetails] = useState(false); //是否正在获取职位详情。如果是，按钮应该显示“Loading...”
  const [jobIds, setJobIds] = useState(null); //所有职位的 ID 列表。
  const [jobs, setJobs] = useState([]); //当前页面的职位列表。
  const [page, setPage] = useState(0); //当前页码。

  const navigate = useNavigate(); //for navigate back to home page, not main logic relevant

  useEffect(() => { //当 page 状态改变时，调用 fetchJobs 函数获取数据。
    fetchJobs(page);
  }, [page]);

  async function fetchJobIds(currPage) { //从 Hacker News API 获取所有职位 ID。 频率：只在初次加载或重新加载时调用一次，之后缓存职位 ID 列表。
    let jobs = jobIds;
    //jobIds 是一个状态变量，存储所有职位的 ID 列表。
    
    if (!jobs) { //如果 jobIds 为空，根据当前页码计算需要显示的职位 ID 范围。
      const res = await fetch(
        "https://hacker-news.firebaseio.com/v0/jobstories.json"
      );
      jobs = await res.json();
      setJobIds(jobs);
    }

    //根据当前页码和每页显示的职位数量计算出需要显示的职位 ID 范围。
    const start = currPage * PAGE_SIZE;
    const end = start + PAGE_SIZE;
    return jobs.slice(start, end);//返回当前页码对应的职位 ID 列表。
  }

  async function fetchJobs(currPage) { //获取当前页码需要显示的职位 ID。频率：每次切换页面时调用，根据当前页码获取对应的职位详情。
    const jobIdsForPage = await fetchJobIds(currPage);

    setFetchingJobDetails(true); //设置 fetchingJobDetails 为 true，表示正在获取数据
    const jobsForPage = await Promise.all(
      jobIdsForPage.map((jobId) =>
        fetch(`https://hacker-news.firebaseio.com/v0/item/${jobId}.json`).then(
          (res) => res.json()
        )
      )
    );
    setJobs([...jobs, ...jobsForPage]); //将新获取的职位详情添加到已有的 jobs 状态中。

    setFetchingJobDetails(false); //设置 fetchingJobDetails 为 false，表示数据获取完成。
  }

  return (
    <>
      <button
        style={{ position: "absolute", top: 0, left: 0 }}
        onClick={() => navigate("/")}
      >
        Going back to home page
      </button>
      <div className="fetch-job-board-container">
        <h1 className="fetch-job-board-title">Hacker News Jobs Board</h1>
        {jobIds == null ? (
          <p className="fetch-job-board-loading-p">Loading...</p>
        ) : (
          <div>
            <div className="fetch-job-board-jobs-contents" role="list">
              {jobs.map((job) => (
                <JobPosting key={job.id} {...job} />
              ))}
            </div>
            {jobs.length > 0 &&
              page * PAGE_SIZE + PAGE_SIZE < jobIds.length && (
                <button
                  className="fetch-job-board-load-more-button"
                  disabled={fetchingJobDetails}
                  onClick={() => setPage(page + 1)}
                >
                  {fetchingJobDetails ? "Loading..." : "Load more jobs"}
                </button>
              )}
          </div>
        )}
      </div>
    </>
  );
};

export default FetchJobBoard;
