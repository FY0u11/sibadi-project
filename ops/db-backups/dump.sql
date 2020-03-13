--
-- PostgreSQL database dump
--

-- Dumped from database version 11.7 (Debian 11.7-2.pgdg90+1)
-- Dumped by pg_dump version 11.7 (Debian 11.7-2.pgdg90+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: carts; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.carts (
    id integer NOT NULL,
    "userId" integer NOT NULL,
    "productId" integer NOT NULL
);


ALTER TABLE public.carts OWNER TO postgres;

--
-- Name: cart_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.cart_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.cart_id_seq OWNER TO postgres;

--
-- Name: cart_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.cart_id_seq OWNED BY public.carts.id;


--
-- Name: orderProducts; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."orderProducts" (
    id integer NOT NULL,
    "orderId" integer NOT NULL,
    "productId" integer NOT NULL
);


ALTER TABLE public."orderProducts" OWNER TO postgres;

--
-- Name: orders; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.orders (
    id integer NOT NULL,
    "userId" integer NOT NULL,
    price double precision NOT NULL,
    status character varying(30) DEFAULT 'created'::character varying NOT NULL,
    created timestamp without time zone NOT NULL,
    "courierId" integer,
    "imagePath" character varying(100)
);


ALTER TABLE public.orders OWNER TO postgres;

--
-- Name: orders_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.orders_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.orders_id_seq OWNER TO postgres;

--
-- Name: orders_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.orders_id_seq OWNED BY public.orders.id;


--
-- Name: orders_products_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.orders_products_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.orders_products_id_seq OWNER TO postgres;

--
-- Name: orders_products_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.orders_products_id_seq OWNED BY public."orderProducts".id;


--
-- Name: products; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.products (
    id integer NOT NULL,
    name character varying(100) NOT NULL,
    description character varying(1024) NOT NULL,
    price integer NOT NULL,
    "imagePath" character varying(100) NOT NULL
);


ALTER TABLE public.products OWNER TO postgres;

--
-- Name: products_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.products_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.products_id_seq OWNER TO postgres;

--
-- Name: products_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.products_id_seq OWNED BY public.products.id;


--
-- Name: roles; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.roles (
    id integer NOT NULL,
    name character varying NOT NULL
);


ALTER TABLE public.roles OWNER TO postgres;

--
-- Name: roles_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.roles_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.roles_id_seq OWNER TO postgres;

--
-- Name: roles_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.roles_id_seq OWNED BY public.roles.id;


--
-- Name: userRoles; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."userRoles" (
    id integer NOT NULL,
    "roleId" integer NOT NULL,
    "userId" integer NOT NULL
);


ALTER TABLE public."userRoles" OWNER TO postgres;

--
-- Name: userRoles_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."userRoles_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."userRoles_id_seq" OWNER TO postgres;

--
-- Name: userRoles_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."userRoles_id_seq" OWNED BY public."userRoles".id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id integer NOT NULL,
    username character varying(20) NOT NULL,
    email character varying(60) NOT NULL,
    phone character varying(15) NOT NULL,
    "passwordHash" character varying(300) NOT NULL,
    salt character varying(300) NOT NULL,
    budget double precision NOT NULL
);


ALTER TABLE public.users OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_seq OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: carts id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.carts ALTER COLUMN id SET DEFAULT nextval('public.cart_id_seq'::regclass);


--
-- Name: orderProducts id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."orderProducts" ALTER COLUMN id SET DEFAULT nextval('public.orders_products_id_seq'::regclass);


--
-- Name: orders id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orders ALTER COLUMN id SET DEFAULT nextval('public.orders_id_seq'::regclass);


--
-- Name: products id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products ALTER COLUMN id SET DEFAULT nextval('public.products_id_seq'::regclass);


--
-- Name: roles id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.roles ALTER COLUMN id SET DEFAULT nextval('public.roles_id_seq'::regclass);


--
-- Name: userRoles id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."userRoles" ALTER COLUMN id SET DEFAULT nextval('public."userRoles_id_seq"'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: carts; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.carts (id, "userId", "productId") FROM stdin;
59	81	38
60	81	39
61	81	40
62	81	41
76	84	38
59	81	38
60	81	39
61	81	40
62	81	41
76	84	38
\.


--
-- Data for Name: orderProducts; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."orderProducts" (id, "orderId", "productId") FROM stdin;
268	140	38
269	140	39
270	140	40
271	140	41
272	140	42
273	141	38
274	142	38
275	143	38
276	144	38
277	145	38
278	146	38
279	146	39
280	147	38
281	148	39
282	149	38
283	149	39
284	150	38
285	150	39
286	151	41
287	151	42
288	152	38
289	152	39
\.


--
-- Data for Name: orders; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.orders (id, "userId", price, status, created, "courierId", "imagePath") FROM stdin;
144	1	12000	created	2019-12-24 16:04:32.685	\N	image-1573903927068.jpeg
145	1	12000	created	2019-12-24 16:05:22.32	\N	image-1573903927068.jpeg
146	1	27000	created	2019-12-24 16:05:22.32	\N	image-1573903927068.jpeg
147	1	12000	created	2019-12-24 16:06:28.249	\N	image-1573903927068.jpeg
140	1	53900	cancelled	2019-12-24 15:35:28.759	\N	image-1573903927068.jpeg
141	1	12000	cancelled	2019-12-24 15:35:28.759	\N	image-1573903927068.jpeg
142	1	12000	cancelled	2019-12-24 15:35:28.759	\N	image-1573903927068.jpeg
148	1	15000	created	2019-12-24 16:06:28.249	\N	image-1573903927069.jpeg
149	1	27000	done	2019-12-28 13:11:08.911	89	image-1573903927068.jpeg
150	1	27000	created	2020-03-09 17:48:22.217	\N	image-1573903927068.jpeg
143	1	12000	cancelled	2019-12-24 16:03:42.478	\N	image-1573903927068.jpeg
152	111	27000	created	2020-03-09 20:55:57.517	\N	image-1573903927068.jpeg
151	1	5500	done	2020-03-09 17:48:22.217	111	image-1573903927071.jpeg
\.


--
-- Data for Name: products; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.products (id, name, description, price, "imagePath") FROM stdin;
38	Some random name 2	Some random description of this random product plus some meaningless words at the end	12000	image-1573903927068.jpeg
39	Product #2	Non tellus orci ac auctor augue mauris augue. Placerat vestibulum lectus mauris ultrices eros in cursus turpis. Aenean vel elit scelerisque mauris pellentesque pulvinar. Consequat ac felis donec et odio pellentesque. Vitae congue eu consequat ac felis. Id venenatis a condimentum vitae sapien pellentesque habitant. Egestas pretium aenean pharetra magna.	15000	image-1573903927069.jpeg
40	Twister	Enim sed faucibus turpis in eu mi bibendum. In nulla posuere sollicitudin aliquam ultrices sagittis orci a scelerisque. Tincidunt tortor aliquam nulla facilisi cras fermentum odio. Lacus laoreet non curabitur gravida arcu ac. Nunc sed id semper risus in hendrerit gravida rutrum. Tristique senectus et netus et malesuada fames ac turpis. Enim nec dui nunc mattis enim ut tellus elementum sagittis. Sit amet tellus cras adipiscing enim eu turpis egestas pretium.	21400	image-1573903927070.jpeg
41	Chicken	Eget nunc scelerisque viverra mauris in aliquam. Elementum sagittis vitae et leo duis ut diam quam nulla. Sed sed risus pretium quam vulputate dignissim suspendisse in est. Lectus nulla at volutpat diam ut. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec. Sodales ut etiam sit amet nisl purus. Tortor pretium viverra suspendisse potenti nullam ac tortor vitae purus. Leo vel orci porta non. Pellentesque dignissim enim sit amet. Tellus in hac habitasse platea dictumst vestibulum rhoncus est.	5000	image-1573903927071.jpeg
42	One more	Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut facilisis iaculis tortor at lobortis. Proin non ligula libero. Vivamus euismod, leo id ultrices maximus, nulla lorem vestibulum augue, sit amet vulputate mauris orci vel odio. Donec ultricies aliquet nisl, eget ultrices orci viverra eget. In vestibulum risus sit amet magna eleifend sagittis et id nunc.	500	3THMYJMKBLMyKvZdvXLn9vzy.webp
43	Foo bar	In ultrices lobortis ante eu auctor. Quisque nec eros enim. Nullam ac nunc nec magna faucibus mollis.	999	310057193_m650.jpg
44	Baz bax	Fusce quis auctor sem. Vivamus sollicitudin odio erat, sit amet facilisis libero rhoncus et. Pellentesque sodales nulla et arcu tincidunt, quis sagittis metus interdum.	666	7z3kKiPCVPEvpda3AS4EuaKA.webp
45	Lorem ipsum	Proin tincidunt turpis augue, et lobortis mauris posuere in. Nam posuere gravida dictum. Aenean est erat, porttitor non tincidunt sed, gravida vitae lectus. Fusce sed odio ac urna luctus varius. Fusce vestibulum ultricies magna eu tempus. Praesent ultricies efficitur tellus, sed interdum mauris bibendum nec.	6463	TCGMUUXBR94J8XckegdCtbvE.webp
46	KFC product	Nulla molestie in nulla nec vehicula. Morbi tincidunt blandit arcu a malesuada. Maecenas in nunc ullamcorper, aliquam purus eu, interdum dui. 	44221	UhKW4qYUybGp9jZb64ijjoXQ.webp
47	The last one product	Proin at hendrerit nunc. Etiam facilisis placerat elit, vitae semper magna sodales a.	100	4sg8pWLTssHCn9DqwbsqYM4f.webp
\.


--
-- Data for Name: roles; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.roles (id, name) FROM stdin;
1	client
2	courier
3	admin
\.


--
-- Data for Name: userRoles; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."userRoles" (id, "roleId", "userId") FROM stdin;
1	1	105
2	1	106
3	1	107
4	1	108
5	1	109
6	1	110
30	1	1
31	3	1
32	2	1
34	1	111
35	2	111
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (id, username, email, phone, "passwordHash", salt, budget) FROM stdin;
98	newCourier	qweqweqwe@qwe.qwe	88888888888	n7QkbNyMPf61ki8KI40Jxk5KzP4TOEbO5YKVffAWrFQQvnCZqDh0NzPGqVQm68gMezYXtVwiBiGoZqWCNS18LKXoQ1sMPj7birOvtw0VbiT3G34k2CT1SQfwrWqnpG+K3q+rdRY5kPVYOAakePrCIynVVSl9uxufwVrBaiRJyF8=	ndAXcrqyEl6TTZcCnmudmQgSuvtxPZ8EKZzzYTHaZjbt3ZD8ckyxfjFbcWk3YpHzcKu+KlwX4Tmz4MbRBdfMRLCibGeqaG/qcBDYBgAauz3PD1PVjSh97XMRTIod4sHfaZ3ezjI6FE7wcvxeFhLGEqy1Of9DVqEYmrll63iFyes=	10634.8999999999996
97	justuser	dar@dar.dar	88888888888	ZBnYLoeXTFHqApZpZTViIU4dx7BvIH7yLC2OYiI+gfTuEOHvQsAJd/AxY++A1IxOiW2579rF554xq9DT0PRPx9fSBZYQgqXNWh2jgm8zHBJX2A+CqcL3Ajn5QcxLCzP5Eglcccsp4Md5411yOLX5wHyU519OXRZg/fZJiN5Y+l8=	WRw9S46l/HMciw1nDi3EPHyEXTyydtCt7CGC0Q8zgqu1SJLtTdqIszDuXN2AcCtLyaTld9qZrZNXRmw0/qr+pb/GRno5amv2HN3oPBLHtL5IzaT8O0bkAqtLbbad//VPSIHcQHb/sNfeaWT+lCVEeObx3bqAil4JZ+OZPBGvHS8=	393651
88	Testuser	test123@example.com	111111111	C4rbQbRPl15lsaDwA1WenoFQ9lsEMZcRjVDxWqW/yzKJ3TW694yzbe6F88F0ORG/7fUBY7AJiSlk41N96CSfP0mu92lZgBiFDjQfP50v1tlAtDb1YbOMapf5TfNutenm7JTdIf5UVxecSlD+MX8XUVwjx7OJY93lCYLy5EOXLZg=	YkUXsZeXwMaQjnfmwrSVPwB1wfebfY7GM1oySln62HR80XcyogboElsiIq/6fB+Scf+/rTTJjOZHg1RSQhINTAKSWjmv6W5t7a+cYTrVSPrY5339cxWOwrvpmqb9AHAhOSQsBmgds38ohwqtrC6QV1kgmZTBfZo1uTZ191F5joY=	111111
90	Test	test@example1.com	123123123	SNWDdAN61BJAV6lBtvCWMT6IwHkfC6gdPl13rWbUD6p9v7gO2Tlg7qcwBPLQ2XlqsWRQkCEYFpEFpjXdyo0FfdjG+WLp5cYr2OCAFGeyRKx0ejWGKtldueuNh/ZsPqHjhiegzQ4Uxp14s7c0AvQyHdTmqF5OtRNksrCayCrNbVs=	XTIWNq/zPP19Czp4LWn2Rm5CGoZW4MFJZoGu+t2wM6cSQKqoyhbUhoIFmt/pNCZBFOM7G0SOQYZtwvxYBSx5Adtszr9QeacRHGNyG7tnjBxKeSDOyAwVorxIVdrHPmvSyPlHFJap5zTceU1w/v+ls3d5SmZaagjetGYncXxnpL0=	64672
82	qqwe	te1st@example.com	123123123	+jtBBytwDJ721f40/m/ZP+DsHvqmvENfDCE6AEKmKr0ORJfugR68aOo9Cm+yZqsOAfpKQqYjflgzQcFN+9kjkNS+vefxty8cUV8md+bgKbOnbrPdhaUEWi5XLyqhsV3vmqKNwpLndAy0ifddhjEghADpXkR04XCzVcDjZqjkiKo=	OaMlX7XP1qrJiLIDxdk7v5XxrnjLOmZL5n0McB+08Tls32oos1Ea8rBuzEd0Joha+s1CH684g9v8pSsBHzptA/dWXd1FERW4inIRtDPF/NsjqPwLo67hGNtvWbJSgO81vRGK/rnsWPk/ih27HbHuL76Qsh9Ar0bajD21Yn37Jz4=	0
83	Sergey	q1we@asd.asd	123123123	CMVF8M6rA5zPX+Up8VqDW6BSMggPykndFgJSD5iFGOVMrZv57IvtfObmb7HSoFbQUeQVaBSBazT3ES1KKwZmDIUqu3AWaYXkhdusAhtxavxs+eaONCYMmNhW85+I4gAXt97ELVZl4Ppw9PcQV6Rwmz1cln5QSUSik2d/rOTskTw=	GgNVTtUDb6XEewgB6BYBLvqwuNiaeegvFtMZRmvB9jSfKG2XIDzXY1C59U3UVR/cDYJINFsIIMt7suKbn1bzk7YXFQ/LRhyj9yTJfMyGmZl1XFtlwVBkZ7cO/C0qVAgVI77IzdjK7dwRc70FQFA+cT05gtCCkKqBPAOGagwrbIQ=	0
84	Sergey1	tes1t@example.com	123123123	twR/3zmOnVNN5lO6id2H16vwltdGTgP905xbOMs1Z026+p+RiHGC7lrK3VsTvqZ5dBWsLD4dEGYZgVFYpInvuXwNQQo2EHlcjtqXGlG0vhB6VGwpE6JLo2Eov+U1QuNivvuJ7tP2vvO1GZmPJzJrmzehxXIYZCP6vrMmBhh6Ajg=	4Y62C8UWLWA5xD4KjT4kz1kCfBHqWccMmI5n8qZGtD8oj8bKSJ3wE/1GJimO57+UhxlTRzDpPSuHz2uDjxPQCYnQGQjp25/jkheN2mvj9kXQO+SJ4lUzQl5O2QkRkSk9cMN9v1xphENieajc7Z+4rDnFTWABaQoCtQ1nygHDlks=	0
92	12344	dar@da.daw	81312312323	21RwteLExuUahq7zpoeaDANY72uC0Igiw88dkBatJCbpsFqb6ZthQU7/LiO5zNcmU5P0wi0voAaQ2aR2ub5EyXmCfPqXAUpRWV000egPKP79T1VLBqNxX88/WjpdeTFvSTWuTlsmnpLUPQrryC766hceDGsyZgLP00E8/efrD6U=	sDKO+zpQpI705pVMRb3yWhzm0lKFLbWZMiLDdEn4J0bvKc2zbgAtmnLnGWvBcUFgoMleA8BiIkFyo5W8DOKgnbRn/qGnqkZfkt/9e35XHSW8pPQAlDaP9tMTS6KZZYNUbDBX+hMIMl6sFLxMWNmTnLhG3055/+pU1s9gnz/CG5c=	0
85	User	user@localhost.test	444444444	TRuxQ1hBe1xMckLW8yR4RG9TJjdXiUsFPX+3V2DY+F1Rvl61hnPXhbx+9GP6RO4BuHuCBzNK4HAdJ53W9rb1zvVRjxItoFUAURK1lLkMzZoEcu8ysEE8lvPESEEzv17aNdW9GxLJq3Az/L+ZIdmOaD37bVjWoHzhkMDME8qsEXo=	6gsWovI0PKR9wRu9lsfRpfCqL2hcXsUMl+pz3zUZ+gABEjzzjJ+brklc4fXDMukvNJPB6KQEZ+HaJ242evVuyB0SasaV1QmjjYGoxiHQ+Z0pf8/pjvO/eGyZnQlROWv5nu4rSmO7uxa2b2H7X4fsRUsOfaAEvGCRO6fJC7FUG0M=	0
86	new1	qw1e@weq.qws	123123123	zM+Yje+OZGa3HCmHyKsdii3mEOgDlzZRXZbx1A7yEWKJ4RRn5FbGAoPCzcv4kF+rJJYSJ8EPzh7cnp8257Sxj3rkT87IhFEGVWwzR8XPURLHfs7vLjD0tuVQQayFtbRoAePyrDTxSUc7ZtX3CbOY2epS7ZPxZrAm7EOTyReZCNU=	B3laJPTQrS4Olw9gAWEvK8qH0USNJkyGAdWUBcOv9QT56Hxt8TfVnf13ioRyGCmXsgTA2nxxJ8ShtQ0CV1Sy0mTXH4dl5Ehr5Vlayju4SaPwRT+5rAhtk3CAUUtb2HjYCZCOkATpNlO63EBHZULp5+PLUyoBowBCHGt0my+Qw1s=	0
81	qweqeqeweqwweq	eqwqeeqw@deqweqw.eqwqwe	213131312113	5xNcPP63TlkRyC2WhHdGmFAmWVG9blxB8yaA0pyUuWfIs+nNntqtemVc77HEJ1rj2e7bW+fHZRi6Wwy9P5wQs5S5/wPfgyEZLR0kZT0L4Rx4Hb8lzxIzGsTvaEpDKgE4QOKM4zk8SdrzAmL9IzCapemkBNHmPoyb3ollyve1Amg=	uQzBSxWjkYBeZwWvppcP1URh0bsSLLjuYcDuu+tJUj+hEiPNCX0C9uRl10iKMbb2/274gCicOO7+wMGkwvtHu97MOylk0q7UxTEft6zmGSWTs6ZRdM7qK87vdJymp3ZIjYbLAFYLCuJDX/y2/ARYDZaj1k541q8dw/dn1p447x4=	0
93	12354	darx@da.daw	81312312323	MDDHRR/TX76ccyjF1MTTNHL+lia5bhUHihQ8vPEHOYDHCVwEOY4BicMwFz37tg3e8naWDS3K3wVJxeW3/fnyfTEbtahXUHyXZosjObmGES9i5f0cqFMIlZonaD4RCe2DuciNBxTnuE4jiGoU71aCvx3dpAQ6cEU4vlpd6LL7J2w=	waRvj5hCzke7DQhYaaOo+DZZloa9O6hlxsIREOv7pBP0lDTZF7IawTRgShafHYaArLfOMbMRO4YW7RLJmG4f8TwkbY/RnSKHWHiuRE9woSnp0Hq+McbDyXEv52iIUCjR9QdrdzI+RMlreQYJOHtWGutfoPW/r35sT3ZOs7weri0=	0
87	qweq	test@example1.cox	3333333333	Nj6ODxjuG/UmShDhaS1eqKK8rjgS63b2gahUJjaJKB2oAl5OLQsDfvbw4jm18mYl38HGs/xh/rwrQRutd70L2mVDoR2r3NB5OTLP6UIZLVH8rWXKYJp7YoQ0fpfhBJn+p9O+cvtb1Wca7USVKjHcUKdEnJw0UrM1XhygPGZcTVo=	DROM1W89lgBx1PxrQFDESjzeRfecg8WqKCkulbT/geSO2wjXNcEaDJpjHTPKYvQlscUVmW+QK8hHx9C3ST2ElZxTbQOeXEY2TKr8VYktJnq7+TqGjsiG+WpgGpe2Js4WOkW3kgvg/RR02luntxEFFqwJ9G+tczcws6gQqlAJfNc=	100000
91	TestA	dark@ada.rt	+79512323231	lJU+HrC+/U0AlXJ9n6C5zxHQA5Y9DOsTrENTi1ARXL3I3HLN3BI9kndllWN8hGbxBTrnZ9ROoa2DwL6JeatUodsXVWWS+p3LirRyvUojzZDjiUAf+S6mPZ1cbatHubx2fWDvklgEWiLGKIQ6MSVHnIWfad1v18tV9dqUsy+8Jro=	0Uy5pj7lGEWch+NHE/ZMR9B/7VjRiaDTI2HnCi82hboxThqlahMB8LWJAZOG9k6qXRleQOEnB3h1a7lRPQybAGqTO+l1m8NVfykoIFLE+UAfrRJ/OkCrco5bx2LHsfrI5dLlYPDea8Pvp7xrOaVTtD7V9UC6PbYqEK7SkHnVEw8=	0
94	12334	darx@da.xaw	81312312323	enyTSkT9FpMUrTC/n1UvX8sBBFhzCNnBGqJvPaDrCZj+jYQjlK4WQFqC+zeZMTfvOmmKqxkKyJnxYBHCacaNZBbaom3M7b8s8lekJr8KMzN0OwlA6PXIgeSB+0OzZbIntD5eu7oapqUFUdxehWxkxWPNEhG1zapScSJFxusXi9c=	YicYQkKH35h7q579fG9irBwicczL6/ayDu7zz6PrwNEzpUP/f4/8/s8E1XicPv7T9kr9Ua0/RyL5kdkxt4UIB6FvYTqmUpDlINLCLU/BVXsSkx1+kQPJlm2axGt2BsL7MayQtljOr+7ahipkcejwVQbN33SXJdJ/ry5FwLbFqnE=	0
95	1x2334	darx@da.xxaw	81312312323	mQuGFWcacaFukvBM5ss8Aq2SzxevwOoEMjItIc5XaufkcHkzNrZFXyb8izSX4b0fDopqLI19FIH2/18VAQBczdWIbOmzcHcDVUHZ5J2gyov5hceTHrtEX/+uRH/KR6xlhYnFhbrGwYaA79f8Xi4ijIkgxW0iyxv5cwe7s0lmJC4=	dYcF+vAVvo8HH6JfPgJu68kbkaOjqxLqyZz2volQrBSwaJ4MEdWmLFMgig3/5pACiuC0rWsEiSGjgPLvlJYsL+Ke3wwgpmUkBkQ3iHlE3B0C81utkMiFJRhffIuFpatFG9C5D7owN5ML6DydT0RG6NVNJEXsH0qZctT5zA/XE5U=	0
96	1x2x334	darx@xda.xxaw	81312312323	EWBQwRt3fuYGEzKMutzQ9WC4zWiZsVx+Y8hoAF+ZygYWflY28oj9xXs9ANNlnXMXwTMGbaL/ryQKn9VTzNWJhBJrcHJx/KN9NO49fWJzPa5b8Haft4hTWMk2txigz0rVLjByQNokl70sV0kNid1kYZdfJXKCzNbf/nX1Mvax62c=	vKf3m5LKG1tCyLxuaEuvQrRyyn6DpNlmcupKjjxk0kDmViPwjtp5iv2AFwUI13Y7qMaiHaCxKCUK9lryknJ0Ca2L0izYNKHa6aBb2+z3uJUB1G4I1ZHBJtk5e+lX6+5QlFGPg4DuMhRcWlMuAFenDlcEQRgHW5fKNBInkFznqi4=	0
100	client1	darkau123ron1997@gmail.com	87777777454	dFxDoYFMg3qL7wAnHm9dv6N23eXr43e0z0b8mYbYaAI1x87z4kQQKVwMIesiFfv2ULKGEo66LgIZO/tZInqdxxiUzzHRexNu0q5VN4lWp+uUM/U7ElSsEOQrJCg5xZ+EbTtFiQBAACxj3jQj52Kc5Z1/poSOhtMEsNr7uZcHEok=	TZoDbMpo6jSkw6b+UGVHZslL2Yi2GrSfT/LT09DvBNuln+MwEwV9P/tLgrU6gqtCPLncZv4KyHlFHiJCkfjDvxO3QoPCHV8cQNgO5MBLSCdatRWI5HSkJKje3JDO2EncqcMFv4pDE0X50ZeafjQg6D0TWsnQ9pwzcwAP01Q6D3o=	36550
89	Courier	teqst@example1.com	123123123	ArlluoBueduX3CAAnHYFrTGUBW4QeVEaTxEuN+TFcfYdJ/fq7cnoSNfqhQRXx+Z1cnpDWif7MA6ui/M2SR8XLbZoD//VzV45JYsBQ0ge4gDsRey0CoD8FwixZc4uBLcIxkOJ+Q814ZMX9ZztaXpPFvfB/RmK2RcLn2SIjC4CmjM=	MGbszfPrVM0bcYp7WjsUVNry1yla4LzWM/tKs8cybOkU/xX90JoK1BsQEm4lkXn8LgracpjnEwkDJECo6CGklQfPBdIlmNEe6VfsTm+nDi5K9jQX2hi60iF5uTuFdmp4DOLs/4pUU4fFmpIDwwLM9yXPom82r6MdjBDoHHuC0u4=	11969.8999999999996
101	courier1	qw1213e@weq.qwe	77777777777	g9Lbd955nGPvDv6MRQJdy8J8ubNqfU1ZsxHq2p69AB7/Db9tJeaRWwfI7lTA+ZSFepZ7A/DT2n8Ssvy9tNBZThZlZGrjcCUY0vhxsdycaQmsXQWKUPrvrqq9YuN+cevOhexBKFcvsBjBb9asBMWVm3qrA8jht4NirvWfU9GqtpY=	YWTrc/sOkNP9fxKpJ5Rh2nztQuhYrP5fWQieeKRngmtQkwZU//tQL7L1JPSnMmMpLR1t+hPbhJ8B4jM3jAcmAyColOsLBScNae51+XWAZiloxdrH5zVUF8nzLudhK2Wo/kWI2KAcwcapjY82/kAMARFiOZzlIu0oqTXkZ+0abNk=	6345
102	Admin1	dar@da.ad	71231231232	iO4Oh8jebd5AKjK26gWjedIgtdbHSNvypLhEjKdimDdyIsIVH9nHQI/NqpbpsTafvV1OBnCFbYQCMNL7iQ5ZdetwkbbMqGXfWVL6pqSjif128IBKoBWESvYDZLaev9DgdCSWZxhQqPJ2W5mG9ImIjSy8x+rarbfbAFGuRU0GQaw=	cPWwT/hnK6AhtVElQuskssJvwiYyIw05k0rT26gZI2Y2MGNLoRt36cX9zKtRM6JjLE7egnpTyq49bhi12ZRGzNNXPDFqOL8kQ8/xNWP+pLtj5qzcNiMXaArfdX/BNqcBAJVDv/x2OBMFa6GHmwqsrFjMzyfXjtw8hnaRXURfxmo=	0
106	asdasd	s@s.ss	88888888888	YRGPppjyjZMbIYshScyK9OuwHJvqBYX0ejVQ0tuK57dl0b+eDSEt/9XzC35fuBhkRapp6f9FO/aEiHEueOjqqI4jbfJCYqLAnPVRReVUANZ+hUCl/DCFbK2WePXg2pJw9wOmNg5FRKcz2UmQhq+nGU440xhfKco7GfGiSiEGZ0E=	SK8LCQk4c5nRMDPGTxnxHpIENiO91vlX+kiwv0rpHcj3YWjD6xBa8wOJiMXmqkgYFcPkKZssZNWHuM7J8Qe1wnLIrytzEZmsc6MHytGAxEi45soFuHjEN/JJgFyIr/dql1uj047MwruRwKHpUhYtC3WYzNWKEO4+Q0mjxE7g1bA=	0
107	qweqweqw	a@a.sd	88888888888	Gmd+UNgjq3aukH8BcsG3sRzDCZqKfyU5FtjvEsydbcKz6IrjfYb+aiByAD9t9vwkeU4O5wEVTCU3ANa+3XWLQRbJiK2XVAxRaLGS70KjL26fV+AtRp2ZaE+VmAumunnmKYxlHNuufT41PAkzrkuP/bWHxgExfaSeMYOYHB7y9MU=	enz4hU1gcT5+/XlBJyagCijlYg7Kx8rbRiwSG83/bA6ze+k8a3Y082i3v+591u6Lo51fGMlqH1r1MQAvOOyC30m/kmXfJr41uoDL80dnHYSREpNmaXczoADblzjLtXEYbhiRa/ttLR1WISfYvNXmwYef3+O2HUEtVVbLCgFmuZw=	0
108	sstrigin	s@ss.sss	88888888888	/BqSN60mqtBDqwrJOws2eoI/2r2xWX3eYCvJUtJEY25O7MstdT2NIltRsQ3y+CSMJ90BHP197ot8u/79dczrk+Pn3ixRYgKt4pFv5jk4T4DuwFfcItfABKTTwvnrXkxbi8AN2z1cd4ePI2/72moR6VkhWjKeXXgq0V+gV9dZeuo=	zUUTkNBw+hez1J6OIWdB00k7Jrrvi0Iv77Iu7TbmCHzamZ10dcNAxfKh0b70ZKF6rUxyk5kFJkytcNYFj2/pjc990PI7d+EDIyUWSabk46LQFWVzI5IywkWJ5OiXV4QmlvLgpoDHPRgSzqhdWzdc6Lv8HXqWzEz1qwsTLg6gtmQ=	0
109	qwesasd	a2S@S.ds	88888888888	XlyGNSjs05RIsNb+yWz41XKz/DxngWtEBSV7AiRd+rpFBFCez55awTsufdkEUGmBMo9XnZRva3dEPA77tkiNCq5cIHgLoaThLBZ03ms0+TRlnMHGf5xG6LOdqXs2U8G9acBGBOXp+FR16EKz2ewzU6BUR8JeMYX4CiPHy1QhjLU=	61TPapHImuQWK5kFnhygdlDCWl2p+9GjqrIOn60D/aZGKfAw0unOHdDIkRiBrL8J4+nDA0z9HDzlBGp2WVCVP3bUnOXbdq5TB4OjVYlpk7OKE7jwNqBAQPYm0JruzB1BXjAXoGDqxKlYM0ENNwxtH2Wu0cqeq0wvnPVMjoMk+dk=	0
110	dsad	s@ss.ssw	88888888888	e2k9sxiVyz0wNEJwARaQ4G3GNo9MVq7Hyl4aaGAnZm0jLlqYg1ANR5HsAxIGzYKocE0/a7WbHjSkKMw1lB4882YCecXWOdCj6JsOtTR+06oxAhX5RHbOjHxBWHQ/B4DCiF1TxSeLUaFwAA+gL1d1qpmQ/ctiojXXuYxl+uHkDF4=	mQ8oGUlle6d5fnyGB8pP0RLg9BMPBoNL8Xu3nT+2yA2cl3ypjfm5S+kS7QZ4Tlt1L/VBq4sE/MC9ee/EoINW0BvRwXhb4h2fZJiltt/FPVgEYy++RX9PDw5E6WMbcAEi86M4i8rO1XKHAY+oQTo87uosP2/A8v3iHI2KAQW+zK4=	0
1	admin			ziasTB33MDI1+S6cIRPoMmy6NINJXJrkZmOwngwDFbLE31s0cFrbS2POPNmEkon4VNIKDLO53d/vNzN/7WDAioY5r4nJDJ13Sw9CvzF0TU3qI0CpE1r1w9JfQKj3K4EMhx1HXE6shEvUUHd3PmdneJBEn/hvgjr/rm/4JRA3qWw=	6xegk7+YjgqoGB9gWHuxig1io23YN+LzCDuA6byelhaAeCMBzM1w9Rh3xBjfUpv1OKxFI+a/55MKIkKeDYtPOpYzrIuu+TKKILnmI4m6ajJtaPjO3sLXRAGLrlOikoe9MSFKdrqWO2Yqyx0klt6IXXzfcczFY09w7hjuthT6pZg=	16500
104	qwes	d@dd.dd	78888888888	NcP+xBIS1N779pVz7yq/hRLsxg3EHjKtBu9QnZQWbexszJx16h8xrJmDlw3UbCWZx6n++8vRs7wI1sfUGW1p3lLdg0T6R7WGNLMg+DwUh3XwPl0Tmd8yqzR/kt5vVYWNCyG80Pv+NVNMijhWpz21O+NgZQfRPlSZIgrcsD6OsLU=	wDPVxIEyX1wMH6O04oSw/sD63/bH66Q+DwzzI94uzItNg1jdeyaNdTLCLi6zdYyjfbGboWO0yAojEs5Q9Sc4eqqIXTiNv0FZ2vyEA34233+yAGry/pSBJ8GbflHVb5BKfrsMcKqEABOcfAjxW9E0Gb1kPo/r/ilyWQw0+bvK0FQ=	0
105	admin3	s@ss.ss	88888888888	UoJE5QD0rZVmqjV6lyqAngwzF3fqcEe8PD0JOkQSg/9nQFiILrJHsCm9JilHvNBp/uoJI5UR9wxFHQ6hQ0nOSW8FoJcsUipQTgtFrnvs329EUwFElphhG+16JtyBTA7xO8Hq7Pl0enakLizpZ1wVxTQD3jWoOhsZDHVZr5rNvI0=	3kzvbYfeE/eiJvhQN+mRX2FfSoYJ4wZelV5WYmEuGbvmwAxHBlCady5voET7gMZkG7CTdg6ELQ0I2T5fFBUVOb72zC0mJ7RT62+fCNcdsEM0/pP3HfLIeKWjmKieHgLAM8JfpWSafe8r51dLxnF0661CZaf9ob/1ZgQ3Br602XI=	0
111	aaxx1	x@xx.xx	88888888888	+qqMh8CTbFgH+lqIj8dwjQeITKy0IHWyYV3FUNii2NcxWXAvxfEUbyD14WKBl5N6HjSqXrBP33eZuTSGy3ghiuFqAoDJh2OtB8wdlunsYErjgJ+NZrXiILzHA4hELI9vlUaKNApDYGMvyictZRn5W+5J2GqxrgqWbqkaCG3VI6c=	38gdL59OaQ5ih0abosmkSA5JOUjxr83LoXZnpf0GbDOMVgd7WxpYeOWv9U7bvuQ3ZjBTjlX35AajjN9D9y7rEiekqC2ALcdJprAOPmNAuFwJaNESVjupBqqmnObpXV36N76/mYFnJypr1CI0X55YuumhCFGSQ2PaRRPS9VKwFZs=	97006
\.


--
-- Name: cart_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.cart_id_seq', 439, true);


--
-- Name: orders_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.orders_id_seq', 152, true);


--
-- Name: orders_products_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.orders_products_id_seq', 289, true);


--
-- Name: products_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.products_id_seq', 47, true);


--
-- Name: roles_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.roles_id_seq', 3, true);


--
-- Name: userRoles_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."userRoles_id_seq"', 35, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_id_seq', 111, true);


--
-- PostgreSQL database dump complete
--

