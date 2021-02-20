import Link from "next/link";

export default function Intro() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-12">
          <Link href="/">
            <a>
              <h1 className="text-center  text-md-left">Blog</h1>
            </a>
          </Link>
        </div>
        <div className="col-md-6 col-12 text-right">
          <h4 className="text-center text-md-right mt-md-3">something smart</h4>
        </div>
      </div>
      <div>
        <p className="text-md-left text-center">
          made by{" "}
          <a
            href="https://sosteve.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            sosteve
          </a>
        </p>
      </div>
    </div>
  );
}
