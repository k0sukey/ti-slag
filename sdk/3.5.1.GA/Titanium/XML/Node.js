function Node(properties) {
	properties = properties || {};

	this.ATTRIBUTE_NODE = properties.ATTRIBUTE_NODE || undefined;
	this.CDATA_SECTION_NODE = properties.CDATA_SECTION_NODE || undefined;
	this.COMMENT_NODE = properties.COMMENT_NODE || undefined;
	this.DOCUMENT_FRAGMENT_NODE = properties.DOCUMENT_FRAGMENT_NODE || undefined;
	this.DOCUMENT_NODE = properties.DOCUMENT_NODE || undefined;
	this.DOCUMENT_TYPE_NODE = properties.DOCUMENT_TYPE_NODE || undefined;
	this.ELEMENT_NODE = properties.ELEMENT_NODE || undefined;
	this.ENTITY_NODE = properties.ENTITY_NODE || undefined;
	this.ENTITY_REFERENCE_NODE = properties.ENTITY_REFERENCE_NODE || undefined;
	this.NOTATION_NODE = properties.NOTATION_NODE || undefined;
	this.PROCESSING_INSTRUCTION_NODE = properties.PROCESSING_INSTRUCTION_NODE || undefined;
	this.TEXT_NODE = properties.TEXT_NODE || undefined;
	this.apiName = 'Titanium.XML.Node';
	this.attributes = properties.attributes || undefined;
	this.bubbleParent = properties.bubbleParent || undefined;
	this.childNodes = properties.childNodes || undefined;
	this.firstChild = properties.firstChild || undefined;
	this.lastChild = properties.lastChild || undefined;
	this.localName = properties.localName || undefined;
	this.namespaceURI = properties.namespaceURI || undefined;
	this.nextSibling = properties.nextSibling || undefined;
	this.nodeName = properties.nodeName || undefined;
	this.nodeType = properties.nodeType || undefined;
	this.nodeValue = properties.nodeValue || undefined;
	this.ownerDocument = properties.ownerDocument || undefined;
	this.parentNode = properties.parentNode || undefined;
	this.prefix = properties.prefix || undefined;
	this.previousSibling = properties.previousSibling || undefined;
	this.text = properties.text || undefined;
	this.textContent = properties.textContent || undefined;

	return this;
}

Node.prototype.addEventListener = function(){};

Node.prototype.appendChild = function(){ return {}; };

Node.prototype.applyProperties = function(params){ for (var key in params) { this[key] = params[key]; } };

Node.prototype.cloneNode = function(){ return {}; };

Node.prototype.fireEvent = function(){};

Node.prototype.getApiName = function(){ return this.apiName; };

Node.prototype.getAttributes = function(){ return this.attributes; };

Node.prototype.getBubbleParent = function(){ return this.bubbleParent; };

Node.prototype.getChildNodes = function(){ return this.childNodes; };

Node.prototype.getFirstChild = function(){ return this.firstChild; };

Node.prototype.getLastChild = function(){ return this.lastChild; };

Node.prototype.getLocalName = function(){ return this.localName; };

Node.prototype.getNamespaceURI = function(){ return this.namespaceURI; };

Node.prototype.getNextSibling = function(){ return this.nextSibling; };

Node.prototype.getNodeName = function(){ return this.nodeName; };

Node.prototype.getNodeType = function(){ return this.nodeType; };

Node.prototype.getNodeValue = function(){ return this.nodeValue; };

Node.prototype.getOwnerDocument = function(){ return this.ownerDocument; };

Node.prototype.getParentNode = function(){ return this.parentNode; };

Node.prototype.getPrefix = function(){ return this.prefix; };

Node.prototype.getPreviousSibling = function(){ return this.previousSibling; };

Node.prototype.getText = function(){ return this.text; };

Node.prototype.getTextContent = function(){ return this.textContent; };

Node.prototype.hasAttributes = function(){ return true; };

Node.prototype.hasChildNodes = function(){ return true; };

Node.prototype.insertBefore = function(){ return {}; };

Node.prototype.isSupported = function(){ return true; };

Node.prototype.normalize = function(){};

Node.prototype.removeChild = function(){ return {}; };

Node.prototype.removeEventListener = function(){};

Node.prototype.replaceChild = function(){ return {}; };

Node.prototype.setBubbleParent = function(property){ this.bubbleParent = property; };

Node.prototype.setLocalName = function(property){ this.localName = property; };

Node.prototype.setNodeValue = function(property){ this.nodeValue = property; };

Node.prototype.setPrefix = function(property){ this.prefix = property; };

module.exports = function(properties){ return new Node(properties); };