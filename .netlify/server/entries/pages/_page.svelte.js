import { c as create_ssr_component, a as subscribe, b as add_attribute, e as escape, v as validate_component } from "../../chunks/index2.js";
import { w as writable } from "../../chunks/index.js";
const store = writable(null);
const Login = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_store;
  $$unsubscribe_store = subscribe(store, (value) => value);
  let userName = "";
  let password = "";
  let error = "";
  $$unsubscribe_store();
  return `<div class="row justify-content-center align-items-center vh-100"><div class="col-md-6"><div class="card"><div class="card-body"><form class="flex mx-auto"><div class="mb-3"><label for="username" class="form-label">Username</label>
						<input type="text" class="form-control" id="username"${add_attribute("value", userName, 0)}></div>

					<div class="mb-3"><label for="password" class="form-label">Password</label>
						<input type="password" class="form-control" id="password"${add_attribute("value", password, 0)}></div>

					<div class="text-center"><button type="submit" class="btn btn-primary">Login</button></div>
					<div id="error_message" class="text-danger"><small>${escape(error)}</small></div></form></div></div></div></div>`;
});
const SuccessfulLogin = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<body><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <script type="module" src="../ExternalWebComponent/folder-structure-component.js"><\/script>
    <folder-structure-component></folder-structure-component></body>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $store, $$unsubscribe_store;
  $$unsubscribe_store = subscribe(store, (value) => $store = value);
  $$unsubscribe_store();
  return `<body style="background-color:lavender"><div class="container">${$store != null ? `${validate_component(SuccessfulLogin, "SuccessfulLoginComponent").$$render($$result, {}, {}, {})}` : `${validate_component(Login, "LoginComponent").$$render($$result, {}, {}, {})}`}</div></body>`;
});
export {
  Page as default
};
