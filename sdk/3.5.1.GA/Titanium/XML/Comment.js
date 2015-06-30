function Comment(properties) {
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
	this.apiName = 'Titanium.XML.Comment';
	this.attributes = properties.attributes || undefined;
	this.bubbleParent = properties.bubbleParent || undefined;
	this.childNodes = properties.childNodes || undefined;
	this.data = properties.data || undefined;
	this.firstChild = properties.firstChild || undefined;
	this.lastChild = properties.lastChild || undefined;
	this.length = properties.length || undefined;
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

Comment.prototype.addEventListener = function(){};

Comment.prototype.appendChild = function(){ return {}; };

Comment.prototype.appendData = function(){};

Comment.prototype.applyProperties = function(params){ for (var key in params) { this[key] = params[key]; } };

Comment.prototype.cloneNode = function(){ return {}; };

Comment.prototype.deleteData = function(){};

Comment.prototype.fireEvent = function(){};

Comment.prototype.getApiName = function(){ return this.apiName; };

Comment.prototype.getAttributes = function(){ return this.attributes; };

Comment.prototype.getBubbleParent = function(){ return this.bubbleParent; };

Comment.prototype.getChildNodes = function(){ return this.childNodes; };

Comment.prototype.getData = function(){ return this.data; };

Comment.prototype.getFirstChild = function(){ return this.firstChild; };

Comment.prototype.getLastChild = function(){ return this.lastChild; };

Comment.prototype.getLength = function(){ return this.length; };

Comment.prototype.getLocalName = function(){ return this.localName; };

Comment.prototype.getNamespaceURI = function(){ return this.namespaceURI; };

Comment.prototype.getNextSibling = function(){ return this.nextSibling; };

Comment.prototype.getNodeName = function(){ return this.nodeName; };

Comment.prototype.getNodeType = function(){ return this.nodeType; };

Comment.prototype.getNodeValue = function(){ return this.nodeValue; };

Comment.prototype.getOwnerDocument = function(){ return this.ownerDocument; };

Comment.prototype.getParentNode = function(){ return this.parentNode; };

Comment.prototype.getPrefix = function(){ return this.prefix; };

Comment.prototype.getPreviousSibling = function(){ return this.previousSibling; };

Comment.prototype.getText = function(){ return this.text; };

Comment.prototype.getTextContent = function(){ return this.textContent; };

Comment.prototype.hasAttributes = function(){ return true; };

Comment.prototype.hasChildNodes = function(){ return true; };

Comment.prototype.insertBefore = function(){ return {}; };

Comment.prototype.insertData = function(){};

Comment.prototype.isSupported = function(){ return true; };

Comment.prototype.normalize = function(){};

Comment.prototype.removeChild = function(){ return {}; };

Comment.prototype.removeEventListener = function(){};

Comment.prototype.replaceChild = function(){ return {}; };

Comment.prototype.replaceData = function(){};

Comment.prototype.setBubbleParent = function(property){ this.bubbleParent = property; };

Comment.prototype.setData = function(property){ this.data = property; };

Comment.prototype.setLocalName = function(property){ this.localName = property; };

Comment.prototype.setNodeValue = function(property){ this.nodeValue = property; };

Comment.prototype.setPrefix = function(property){ this.prefix = property; };

Comment.prototype.substringData = function(){ return ''; };

module.exports = function(properties){ return new Comment(properties); };